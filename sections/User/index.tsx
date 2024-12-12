// React, NextJS imports
import React, { useState } from 'react';
import { useRouter } from 'next/router';

// External Components imports
import BlockiesSvg from 'blockies-react-svg';

// Internal Components imports
import {
  Box,
  Text,
  Tooltip,
  Spinner,
  Pagination,
  TickCircleFilled,
  CopyFilled,
} from '../../blocks';
import ListView from '../../components/Transactions/ListView';
import { centerMaskString, convertCaipToObject } from '../../utils/helpers';
import { useGetTransactionsByUser } from '../../hooks/useGetTransactionsByUser';
import { PerPageItems } from '../../utils/constants';

const Search = () => {
  const router = useRouter();
  let { address } = router.query;

  const [tooltipText, setToolTipText] = useState('Copy Address');
  const [page, setPage] = useState(1);

  address = Array.isArray(address) ? address[0] : address;

  const copyAddress = () => {
    if (address) {
      navigator.clipboard.writeText(address);
      setToolTipText('Copied');
    }
    setTimeout(() => {
      setToolTipText('Copy Address');
    }, 1000);
  };

  const { data, isLoading } = useGetTransactionsByUser({ address, page: page });

  const showLoading = !address || isLoading;

  if (showLoading) {
    return (
      <Box display="flex" justifyContent="center">
        <Spinner size="extraLarge" />
      </Box>
    );
  }

  // address = address && convertCaipToObject(address).result.address

  if (!address) {
    return null;
  }

  const { result } = convertCaipToObject(address);
  const maskedAddress = result.address;

  const showPagination = data?.totalPages > 1;
  return (
    <Box width="100%" display="flex" flexDirection="column" gap="spacing-md">
      <Box
        width="100%"
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        gap="spacing-md"
      >
        <Box
          display={{ initial: 'flex', ml: 'none' }}
          flexDirection="row"
          gap="spacing-sm"
          alignItems="center"
        >
          <Text variant="h4-semibold" color="text-primary">
            Address
          </Text>

          <Box
            display="flex"
            flexDirection="row"
            gap="spacing-xxs"
            alignItems="center"
          >
            <Box
              width="24px"
              height="24px"
              borderRadius="radius-xl"
              overflow="hidden"
            >
              <BlockiesSvg address={address} size={8} scale={4} />
            </Box>
            <Text variant="h5-semibold" color="text-primary">
              {maskedAddress}
            </Text>
            <Tooltip title={tooltipText}>
              <Box cursor="pointer" onClick={copyAddress}>
                {tooltipText === 'Copied' ? (
                  <TickCircleFilled
                    autoSize
                    size={16}
                    color="icon-state-success-bold"
                  />
                ) : (
                  <CopyFilled autoSize size={16} color="icon-tertiary" />
                )}
              </Box>
            </Tooltip>
          </Box>
        </Box>
        <Box
          display={{ initial: 'none', ml: 'flex' }}
          flexDirection="column"
          gap="spacing-xxs"
        >
          <Box display="flex" gap="spacing-xxs" alignItems="center">
            <Box
              width="24px"
              height="24px"
              borderRadius="radius-xl"
              overflow="hidden"
            >
              <BlockiesSvg address={address} size={8} scale={4} />
            </Box>
            <Text variant="h4-semibold" color="text-primary">
              Address
            </Text>
          </Box>

          <Box
            display="flex"
            flexDirection="row"
            gap="spacing-xxs"
            alignItems="center"
          >
            <Text variant="bes-semibold" color="text-primary">
              {maskedAddress}
            </Text>
            <Tooltip title={tooltipText}>
              <Box cursor="pointer" onClick={copyAddress}>
                {tooltipText === 'Copied' ? (
                  <TickCircleFilled
                    autoSize
                    size={16}
                    color="icon-state-success-bold"
                  />
                ) : (
                  <CopyFilled autoSize size={16} color="icon-tertiary" />
                )}
              </Box>
            </Tooltip>
          </Box>
        </Box>
        <Text variant="h5-semibold" color="text-primary">
          Transactions for {centerMaskString(maskedAddress)}
        </Text>
      </Box>
      <ListView data={data} />
      {showPagination && (
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="flex-end"
          alignItems="flex-end"
        >
          <Pagination
            pageSize={PerPageItems}
            current={page}
            total={data?.totalPages * PerPageItems}
            onChange={(page) => setPage(page)}
          />
        </Box>
      )}
    </Box>
  );
};

export default Search;
