// React, NextJS imports
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

import { Spinner, Box } from '../../blocks';

const UserTransactionsView = dynamic(() => import('../../sections/User'), {
  loading: () => <Spinner size="extraLarge" />,
});

const Layout = dynamic(() => import('../../layout'));

export default function Transactions() {
  return (
    <>
      <Head>
        <title>Push Transactions</title>
      </Head>
      <Layout>
        <UserTransactionsView />
      </Layout>
    </>
  );
}
