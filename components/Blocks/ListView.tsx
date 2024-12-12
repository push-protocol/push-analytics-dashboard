// React, NextJS imports
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

// External Components imports
import { useTheme } from 'styled-components';

// Internal Components imports
import { Box, Text, Table, Pagination } from '../../blocks';
import { useLiveBlocks } from '../../hooks/useBlocks';
import { PerPageItems } from '../../utils/constants';
import { getValidatorNode, fromNow } from '../../utils/helpers';
import BlockHashLink from '../Reusables/BlockHashLink';
import Address from '../Reusables/AddressComponent';

const Blocks = () => {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [cachedTotalPages, setCachedTotalPages] = useState(0); // State for caching totalPages

  const { data, isLoading } = useLiveBlocks({ page, perPageItems: 15 });

  const theme = useTheme();
  const isDarkMode = theme.scheme === 'dark';

  const columns = [
    {
      title: 'BLOCK HASH',
      dataIndex: 'blockHash',
      render: (text) => <BlockHashLink blockHash={text} masking={true} />,
      cellAlignment: 'flex-start',
      headerAlignment: 'flex-start',
      width: '310px',
    },
    {
      title: 'VALIDATOR',
      dataIndex: 'validator',
      render: (text) => <Address address={text} allowCopy />,
      cellAlignment: 'flex-start',
      headerAlignment: 'flex-start',
      width: '310px',
    },
    {
      title: 'TXN',
      dataIndex: 'totalNumberOfTxns',
      render: (text) => (
        <Text variant="bs-regular" color="text-primary">
          {text === '' ? '-' : text}
        </Text>
      ),
      cellAlignment: 'center',
      headerAlignment: 'center',
      width: '200px',
    },
    {
      title: 'SIZE (IN BYTES)',
      dataIndex: 'blockSize',
      render: (text) => (
        <Text variant="bs-regular" color="text-primary">
          {text}
        </Text>
      ),
      cellAlignment: 'center',
      headerAlignment: 'center',
      width: '200px',
    },
    {
      title: 'AGE',
      dataIndex: 'ts',
      render: (text) => (
        <Text variant="bs-regular" color="text-tertiary">
          {fromNow(text)}
        </Text>
      ),
      cellAlignment: 'center',
      headerAlignment: 'center',
      width: '80px',
    },
  ];

  const dataSource =
    data?.blocks?.map((block) => ({
      id: block.blockHash,
      blockHash: block.blockHash,
      validator: getValidatorNode(block.blockDataAsJson), // Define this function or update data mapping accordingly
      totalNumberOfTxns: block.totalNumberOfTxns,
      blockSize: block.blockSize,
      ts: block.ts,
    })) || [];

  // Cache totalPages when new data is fetched
  useEffect(() => {
    if (data?.totalPages) {
      setCachedTotalPages(data.totalPages);
    }
  }, [data?.totalPages]);

  // Use the cached totalPages when data is loading
  const totalPages = data?.totalPages ?? cachedTotalPages;

  return (
    <Box display="flex" flexDirection="column" gap="spacing-xs">
      <Box height={'875px'}>
        <Table
          loading={isLoading}
          columns={columns}
          dataSource={dataSource}
          backgroundColor={isDarkMode ? 'surface-secondary' : 'surface-primary'}
        />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="flex-end"
        alignItems={{ initial: 'flex-end', ml: 'center' }}
      >
        {totalPages > 1 && (
          <Pagination
            pageSize={PerPageItems}
            current={page}
            total={totalPages * PerPageItems}
            onChange={(page) => setPage(page)}
          />
        )}
      </Box>
    </Box>
  );
};

export default Blocks;
