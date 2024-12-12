// React, NextJS imports
import React, { FC } from 'react';

// External Components imports
import { css } from 'styled-components';

// Internal Components imports
import { Box, Text, Skeleton } from '../../blocks';
import { useCounts } from '../../hooks/useCounts';

export type OverViewProps = {};

const OverView: FC<OverViewProps> = () => {
  const { data, isLoading } = useCounts();

  return (
    <Box
      display="flex"
      flexDirection={{ ml: 'column', initial: 'row' }}
      justifyContent="space-between"
      alignItems="center"
      gap="spacing-xxxs"
      padding="spacing-sm"
      border="border-xmd solid stroke-secondary"
      backgroundColor="surface-primary"
      borderRadius="radius-md"
      width="-webkit-fill-available"
    >
      <Skeleton isLoading={isLoading}>
        <Box
          width="100%"
          display={{ dp: 'flex', ml: 'none' }}
          flexDirection="column"
          justifyContent="flex-start"
          align-items="flex-start"
          gap="spacing-xxxs"
          padding="spacing-none spacing-lg spacing-none spacing-lg"
        >
          <Text variant="h6-regular" color="text-tertiary">
            Transactions
          </Text>
          <Text variant="h3-semibold" color="text-primary">
            {data?.totalTransactions.toLocaleString()}
          </Text>
        </Box>

        <Box
          width="100%"
          display={{ dp: 'none', ml: 'flex' }}
          flexDirection="column"
          justifyContent="flex-start"
          align-items="flex-start"
          gap="spacing-xxxs"
          padding="spacing-none spacing-xs spacing-xs spacing-xs"
        >
          <Text variant="h6-regular" color="text-tertiary">
            Transactions
          </Text>
          <Text variant="h3-semibold" color="text-primary">
            {data?.totalTransactions.toLocaleString()}
          </Text>
        </Box>
      </Skeleton>

      <Skeleton isLoading={isLoading}>
        <Box
          width="100%"
          display={{ dp: 'flex', ml: 'none' }}
          flexDirection="column"
          justifyContent="flex-start"
          align-items="flex-start"
          gap="spacing-xxxs"
          padding="spacing-none spacing-lg spacing-none spacing-lg"
          css={css`
            border-left: var(--border-sm) solid var(--stroke-tertiary);
          `}
        >
          <Text variant="h6-regular" color="text-tertiary">
            Total Blocks
          </Text>
          <Text variant="h3-semibold" color="text-primary">
            {data?.totalBlocks.toLocaleString()}
          </Text>
        </Box>
        <Box
          width="100%"
          display={{ dp: 'none', ml: 'flex' }}
          flexDirection="column"
          justifyContent="flex-start"
          align-items="flex-start"
          gap="spacing-xxxs"
          padding="spacing-xs"
          css={css`
            border-top: var(--border-sm) solid var(--stroke-tertiary);
          `}
        >
          <Text variant="h6-regular" color="text-tertiary">
            Total Blocks
          </Text>
          <Text variant="h3-semibold" color="text-primary">
            {data?.totalBlocks.toLocaleString()}
          </Text>
        </Box>
      </Skeleton>

      <Skeleton isLoading={isLoading}>
        <Box
          width="100%"
          display={{ dp: 'flex', ml: 'none' }}
          flexDirection="column"
          justifyContent="flex-start"
          align-items="flex-start"
          gap="spacing-xxxs"
          padding="spacing-none spacing-lg spacing-none spacing-lg"
          css={css`
            border-left: var(--border-sm) solid var(--stroke-tertiary);
          `}
        >
          <Text variant="h6-regular" color="text-tertiary">
            Daily Transactions
          </Text>
          <Text variant="h3-semibold" color="text-primary">
            {data?.dailyTransactions.toLocaleString()}
          </Text>
        </Box>

        <Box
          width="100%"
          display={{ dp: 'none', ml: 'flex' }}
          flexDirection="column"
          justifyContent="flex-start"
          align-items="flex-start"
          gap="spacing-xxxs"
          padding="spacing-xs spacing-xs spacing-none spacing-xs"
          css={css`
            border-top: var(--border-sm) solid var(--stroke-tertiary);
          `}
        >
          <Text variant="h6-regular" color="text-tertiary">
            Total Transactions
          </Text>
          <Text variant="h3-semibold" color="text-primary">
            {data?.dailyTransactions.toLocaleString()}
          </Text>
        </Box>
      </Skeleton>
    </Box>
  );
};

export default OverView;
