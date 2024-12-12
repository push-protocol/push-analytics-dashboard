// React, NextJS imports
import React, { useCallback, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDebounce } from 'react-use';

import { ethers } from 'ethers';

// Internal Components imports
import { TextInput, Search } from '../../blocks';
import { useSearchByAddress } from '../../hooks/useSearchByAddress';

export default function SearchBar() {
  const router = useRouter();

  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');

  const getFormattedQuery = useCallback((qry: string) => {
    if (!qry) return ''; // Return empty string if the query is empty
    const isAddress = ethers.isAddress(qry);
    return isAddress ? `eip155:${qry}` : qry;
  }, []);

  // Debounce the query
  useDebounce(
    () => {
      setDebouncedQuery(query);
    },
    500,
    [query]
  );

  // Conditionally call the useSearchByAddress hook if debouncedQuery is not empty
  const { data, isLoading } = useSearchByAddress({
    address: debouncedQuery || '',
    page: 1,
  });

  // Log the data or loading state
  useEffect(() => {
    if (debouncedQuery) {
      if (!isLoading && data) {
        const blocks = data?.blocks;
        const transactions = blocks.flatMap((block) => block.transactions); // Use flatMap to flatten the transactions

        const isSearchedTransaction = transactions.find(
          (tx) => tx.txnHash === debouncedQuery
        );
        if (isSearchedTransaction) {
          router.push(`/transactions/${debouncedQuery}`);
          return;
        }

        const isSearchedBlock = blocks.some(
          (block) => block.blockHash === debouncedQuery
        );
        if (isSearchedBlock) {
          router.push(`/blocks/${debouncedQuery}`);
          return;
        }

        if (blocks.length >= 1) {
          router.push(`/users/${debouncedQuery}`);
          return;
        }
      }
    }
  }, [debouncedQuery, data, isLoading]);

  return (
    <TextInput
      placeholder="Search by Address, Tx Hash, Block Hash"
      icon={<Search size={24} />}
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}
