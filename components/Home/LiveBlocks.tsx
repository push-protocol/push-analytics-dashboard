// React, NextJS imports
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

// External Components imports
import { css, useTheme } from 'styled-components';

// Internal Components imports
import { Box, Text, Front, Table } from '../../blocks';
import { useLiveBlocks } from '../../hooks/useBlocks';
import { getValidatorNode } from '../../utils/helpers';
import { centerMaskString, fromNow } from '../../utils/helpers';
import BlockHashLink from '../Reusables/BlockHashLink';
import Address from '../Reusables/AddressComponent';

export default function LiveBlocks() {
  const router = useRouter();
  const { data, error, isLoading, isError } = useLiveBlocks({
    page: 1,
    perPageItems: 6,
  });

  const theme = useTheme();
  const isDarkMode = theme.scheme === 'dark';

  const columns = [
    {
      title: 'BLOCK HASH',
      dataIndex: 'blockHash',
      render: (text) => <BlockHashLink blockHash={text} masking={true} />,
      cellAlignment: 'flex-start',
      headerAlignment: 'flex-start',
      width: '125px',
    },
    {
      title: 'VALIDATOR',
      dataIndex: 'validator',
      render: (text) => <Address address={text} />,
      cellAlignment: 'flex-start',
      headerAlignment: 'flex-start',
      width: '135px',
    },
    {
      title: 'TX',
      dataIndex: 'totalNumberOfTxns',
      render: (text) => {
        console.log('Text', text);
        return (
          <Text variant="bs-regular" color="text-primary">
            {text === '' ? '-' : text}
          </Text>
        );
      },
      cellAlignment: 'center',
      headerAlignment: 'center',
      width: '65px',
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
      width: '65px',
    },
  ];

  const dataSource =
    data?.blocks?.map((block) => ({
      id: block.blockHash,
      blockHash: block.blockHash,
      validator: getValidatorNode(block.blockDataAsJson), // Define this function or update data mapping accordingly
      totalNumberOfTxns: block.totalNumberOfTxns,
      ts: block.ts,
    })) || [];

  return (
    <Box
      overflow="auto"
      display="flex"
      flexDirection="column"
      gap="spacing-sm"
      maxWidth={{ initial: 'auto', tb: '350px', ml: 'auto' }}
    >
      <Text variant="h5-semibold" color="text-primary">
        Live Blocks
      </Text>
      <Box height={'375px'}>
        <Table
          loading={isLoading}
          columns={columns}
          dataSource={dataSource}
          backgroundColor={isDarkMode ? 'surface-secondary' : 'surface-primary'}
        />
      </Box>
      <Link href="/blocks">
        <Box
          display="flex"
          flexDirection="row"
          gap="spacing-xxxs"
          color="text-brand-medium"
          justifyContent={{ initial: 'flex-end', ml: 'flex-start' }}
        >
          <Text variant="bes-semibold" color="text-brand-medium">
            View All Blocks
          </Text>
          <Front autoSize />
        </Box>
      </Link>
    </Box>
  );
}
