// React, NextJS imports
import React from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';

// Internal Components imports
import { Spinner } from '../../blocks';

const Layout = dynamic(() => import('../../layout'));

const BlocksDetailsView = dynamic(
  () => import('../../sections/Blocks/blockHash'),
  {
    loading: () => <Spinner size="extraLarge" />,
  }
);

const BlocksDetailsPage = () => {
  return (
    <>
      <Head>
        <title>Blocks Details</title>
      </Head>
      <Layout>
        <BlocksDetailsView />
      </Layout>
    </>
  );
};

export default BlocksDetailsPage;
