// React, NextJS imports
import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

// Internal Components imports
import { Spinner } from '../../blocks';

const HomeView = dynamic(() => import('../../sections/Home'), {
  loading: () => <Spinner size="extraLarge" />,
});

const Layout = dynamic(() => import('../../layout'));

export default function Home() {
  return (
    <>
      <Head>
        <title>Push Scan</title>
      </Head>
      <Layout>
        <HomeView />
      </Layout>
    </>
  );
}
