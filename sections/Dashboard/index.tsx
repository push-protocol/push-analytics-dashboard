// React, NextJS imports
import React from 'react';

// External Library imports
import { Grid, useMediaQuery } from '@mui/material';
import { Box } from '../../blocks';

// Internal Components imports
import {
  HorizontalLine,
} from '../../components/Reusables/SharedStyling';
import Trending from '../../components/Dashboard/Trending';
import RecentlyAdded from '../../components/Dashboard/RecentlyAdded';
import TopChannels from '../../components/Dashboard/TopChannels';
import LineChartSet from '../../components/Dashboard/LineChartSet';
import OverViewSet from '../../components/Dashboard/OverViewSet';
import GovernanceSet from '../../components/Dashboard/GovernanceSet';

const DashBoard = () => {
  const isMobile = useMediaQuery('(max-width:480px)');
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
    >
      <OverViewSet />
      <Grid
        container
        spacing={!isMobile ? 3 : 0}
        justifyContent="center"
        mt={isMobile ? 1 : -3.5}
      >
        <Trending />
        <HorizontalLine />
        <RecentlyAdded />
        <HorizontalLine />
        <TopChannels />
      </Grid>
      <LineChartSet />
      <GovernanceSet />
    </Box>
  );
};

export default DashBoard;
