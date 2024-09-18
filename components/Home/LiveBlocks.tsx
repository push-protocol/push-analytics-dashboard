import React from 'react';
import { Box, Text, Front, Table } from '../../blocks';
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useLiveBlocks } from '../../hooks/useBlocks';
import { getValidatorNode } from '../../utils/helpers'
import { centerMaskString, fromNow } from '../../utils/helpers'
import { useTheme } from 'styled-components';
import BlockHashLink from '../Reusables/BlockHashLink'

export default function LiveBlocks() {
  const router = useRouter()
  const { data, error, isLoading, isError } = useLiveBlocks({ page: 1, perPageItems: 6 });

  const theme = useTheme();
  const isDarkMode = theme.scheme === 'dark';

  const columns = [
    {
      title: 'BLOCK HASH',
      dataIndex: 'blockHash',
      render: (text) => <BlockHashLink blockHash={text} masking={true}/>,
      cellAlignment: 'flex-start',
      headerAlignment: 'flex-start',
      width: '125px'
    },
    {
      title: 'VALIDATOR',
      dataIndex: 'validator',
      render: (text) => <Text variant='bs-regular' color="text-primary">{centerMaskString(text)}</Text>,
      cellAlignment: 'flex-start',
      headerAlignment: 'flex-start',
      width: '135px'
    },
    {
      title: 'TX',
      dataIndex: 'totalNumberOfTxns',
      render: (text) => <Text variant='bs-regular' color="text-primary">{text}</Text>,
      cellAlignment: 'center',
      headerAlignment: 'center',
      width: '65px'
    },
    {
      title: 'AGE',
      dataIndex: 'ts',
      render: (text) => <Text variant='bs-regular' color="text-tertiary">{fromNow(text * 1000)}</Text>,
      cellAlignment: 'center',
      headerAlignment: 'center',
      width: '65px'
    },
  ];

  const dataSource = data?.blocks?.map(block => ({
    id: block.blockHash,
    blockHash: block.blockHash,
    validator: getValidatorNode(block.blockDataAsJson?.signersList), // Define this function or update data mapping accordingly
    totalNumberOfTxns: block.totalNumberOfTxns,
    ts: block.ts
  })) || [];

  return (
    <Box
      css={'flex: 0 0 35%'}
      display="flex"
      flexDirection="column"
      gap="spacing-sm"
    >
      <Text variant='h5-semibold' color="text-primary">Live Blocks</Text>
      <Box height={"375px"}>
        <Table loading={isLoading} columns={columns} dataSource={dataSource} backgroundColor={isDarkMode ? 'surface-secondary' : 'surface-primary'} />
      </Box>
      <Link href='/blocks'>
        <Box
          display="flex"
          flexDirection="row"
          gap="spacing-xxxs"
          color="text-brand-medium"
          justifyContent={{initial: "flex-end", ml: "flex-start"}}
        >
            <Text variant='bes-semibold' color="text-brand-medium">View All Blocks</Text>
            <Front autoSize />
        </Box>
      </Link>
    </Box>
  )
}
