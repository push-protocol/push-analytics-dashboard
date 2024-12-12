// React, NextJS imports
import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

// Internal Components imports
import { Spinner } from '../../blocks';

const TransactionView = dynamic(() => import('../../sections/Transactions'), {
  loading: () => <Spinner size="extraLarge" />,
});

const Layout = dynamic(() => import('../../layout'));

export default function Home() {
  return (
    <>
      <Head>
        <title>Push Transactions</title>
      </Head>
      <Layout>
        <TransactionView />
      </Layout>
    </>
  );
}
