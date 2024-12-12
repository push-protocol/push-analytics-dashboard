// React, NextJS imports
import React from 'react';

// Internal Components imports
import { Box, Text } from '../../blocks';
import SearchBar from '../../components/Home/SearchBar';
import OverView from '../../components/Home/OverView';
import LiveBlocks from '../../components/Home/LiveBlocks';
import LiveTransactions from '../../components/Home/LiveTransactions';
import ChainAlertBar from '../../common/components/ChainAlertBar';

const Home = () => {
  return (
    <Box
      width="-webkit-fill-available"
      display="flex"
      flexDirection="column"
      gap="spacing-lg"
    >
      <ChainAlertBar
        bannerText="Governance Proposal is Live! Vote today to bring Push Chain to reality."
        bannerURL="https://gov.push.org/t/introducing-push-chain-a-shared-state-l1-for-universal-apps/1991"
        bannerTextPrefix="Push Chain"
        prefixURL="https://push.org/chain"
      />
      <Box
        width="-webkit-fill-available"
        display="flex"
        flexDirection="column"
        gap="spacing-xxxl"
      >
        <Box
          display={{ dp: 'flex', ml: 'none' }}
          flexDirection="column"
          gap="spacing-xs"
        >
          <Text variant="h3-semibold" color="text-primary">
            Push Blockchain Explorer
          </Text>
          <SearchBar />
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          gap={{ ml: 'spacing-lg', initial: 'spacing-xxl' }}
        >
          <OverView />
        </Box>

        <Box
          display="flex"
          flexDirection={{ initial: 'row', ml: 'column' }}
          gap={{ initial: 'spacing-xl', tb: 'spacing-md', ml: 'spacing-xxl' }}
          justifyContent="space-between"
        >
          <LiveBlocks />
          <LiveTransactions />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
