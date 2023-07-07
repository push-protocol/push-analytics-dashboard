// React, NextJS imports
import React from 'react';

// External Library imports
import { Grid, useMediaQuery } from '@mui/material';

// Internal Components imports
import { HorizontalLine, DashBoardContainer } from '../../components/Dashboard/dashboard.styled';
import Trending from '../../components/Dashboard/Trending';
import RecentlyAdded from '../../components/Dashboard/RecentlyAdded';
import TopChannels from '../../components/Dashboard/TopChannels';
import LineChartSet from '../../components/Dashboard/LineChartSet/LineChartSet';
import OverViewSet from '../../components/Dashboard/OverViewSet/OverViewSet';
import GovernanceSet from '../../components/Dashboard/GovernanceSet/GovernanceSet';

const DashBoard = () => {
  const isMobile = useMediaQuery('(max-width:480px)');
  return (
    <DashBoardContainer>
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
    </DashBoardContainer>
  );
};

export default DashBoard;
