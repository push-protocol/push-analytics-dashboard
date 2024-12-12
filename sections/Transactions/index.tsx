// React, NextJS imports
import React, { useState, useEffect } from 'react';

// Internal Components imports
import { Box, Text, Spinner, Pagination } from '../../blocks';
import ListView from '../../components/Transactions/ListView';
import { useLiveTransactions } from '../../hooks/useLiveTransactions';
import { PerPageItems } from '../../utils/constants';

const Transactions = () => {
  const [page, setPage] = useState(1);
  const [cachedTotalPages, setCachedTotalPages] = useState(0); // State for caching totalPages

  const { data, isLoading } = useLiveTransactions({ page });

  // Cache totalPages when new data is fetched
  useEffect(() => {
    if (data?.totalPages) {
      setCachedTotalPages(data.totalPages);
    }
  }, [data?.totalPages]);

  // Use the cached totalPages when data is loading
  const totalPages = data?.totalPages ?? cachedTotalPages;

  return (
    <Box width="100%" display="flex" flexDirection="column" gap="spacing-md">
      <Text variant="h3-semibold" color="text-primary">
        Transactions
      </Text>
      <ListView data={data} isLoading={isLoading} />
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

export default Transactions;
