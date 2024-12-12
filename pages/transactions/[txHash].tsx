// React, NextJS imports
import React from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';

// Internal Components imports
import { Spinner } from '../../blocks';

const Layout = dynamic(() => import('../../layout'));

const TransactionDetailsView = dynamic(
  () => import('../../sections/Transactions/txHash'),
  {
    loading: () => <Spinner size="extraLarge" />,
  }
);

const TransactionDetailsPage = () => {
  return (
    <>
      <Head>
        <title>Transaction Details</title>
      </Head>
      <Layout>
        <TransactionDetailsView />
      </Layout>
    </>
  );
};

export default TransactionDetailsPage;
