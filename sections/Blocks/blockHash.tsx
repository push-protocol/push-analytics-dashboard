// React, NextJS imports
import React, { useState } from 'react';
import { useRouter } from 'next/router';

// Internal Components imports
import { Box, Text, Spinner } from '../../blocks';
import Advanced from '../../components/Reusables/Advanced';
import ConsensusInfo from '../../components/Blocks/ConsensusInfo';
import BlockDetails from '../../components/Blocks/Details';
import BlockTxDetails from '../../components/Blocks/BlockTxDetails';
import { useLiveBlockByHash } from '../../hooks/useLiveBlockByHash';

const Details = () => {
  const router = useRouter();
  const { blockHash } = router.query;

  const [showConsensusInfo, setConsensusInfo] = useState(false);

  const { data, isLoading } = useLiveBlockByHash({ blockHash });
  const showLoading = !blockHash || isLoading;

  if (showLoading) {
    return (
      <Box display="flex" justifyContent="center">
        <Spinner size="extraLarge" />
      </Box>
    );
  }

  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      gap="spacing-sm"
    >
      <Text variant="h3-semibold" color="text-primary">
        Block Details
      </Text>
      <BlockDetails data={data?.blockDetails} isLoading={isLoading} />
      <BlockTxDetails data={data?.blockDetails} isLoading={isLoading} />
      <Advanced
        showConsensusInfo={showConsensusInfo}
        toggleConsensusInfo={setConsensusInfo}
      />

      {showConsensusInfo && (
        <ConsensusInfo data={data?.blockDetails} isLoading={isLoading} />
      )}
    </Box>
  );
};

export default Details;
