// React, NextJS imports
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useSearchByAddress } from '../../../hooks/useSearchByAddress'
import { TransactionLoader } from '../../../components/Loader/TransactionLoader';

const TransactionView = dynamic(() => import('../../../sections/Transactions'), {
  loading: () => <TransactionLoader />,
});

const TransactionsView = dynamic(() => import('../../../sections/Transactions'), {
    loading: () => <p>Loading...</p>,
  });

const Layout = dynamic(() => import('../../../layout'));

export default function Transactions() {
  const router = useRouter();
  const { txHash } = router.query; // Accessing the dynamic address parameter
  const [address, setAddress] = useState('');

  useEffect(() => {
    if (router.isReady && txHash && typeof txHash === 'string') {
      setAddress(txHash); // Ensuring txHash is treated as a string
    }
  }, [router.isReady, txHash]);

  
  const { data, error, isLoading, isError } = useSearchByAddress({ address });
  
  


  if (!address || data?.transactions.length == 0) {
    return <TransactionLoader />; // Render a loading state or placeholder until address is defined
  }

  return (
    <>
      <Head>
        <title>Push Transactions</title>
      </Head>
      <Layout>
        <TransactionsView address={address} data={data} search={true} />
      </Layout>
    </>
  );
}
