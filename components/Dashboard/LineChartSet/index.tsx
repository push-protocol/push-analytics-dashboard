// React, NextJS imports
import * as React from 'react';

// External Library imports
import { Grid, useMediaQuery } from '@mui/material';

// Internal Components imports
import { HorizontalLine } from '../../Reusables/SharedStyling';
import Notifications from '../Notifications';
import Subscribers from '../Subscribers';
import ChatUsers from '../ChatUsers';
import RequestSent from '../RequestSent';
import Filters from '../Filters';
import { useData } from '../../../contexts/DataContext';
import useStatisticData from '../../../hooks/useStatisticData';
import useChannelStatistics from '../../../hooks/useChannelStatistics';
import getDatesArray from '../../../utils/helpers';
import HorizontalBarChart from '../../../charts/HorizontalBarChart';
import { CHAIN_LIST, TIME_FILTERS } from '../../../utils/constants';
import { DataContextType } from '../../../types/context';

export default function LineChartSet() {
  const isMobile = useMediaQuery('(max-width:480px)');
  const {
    subscriberData,
    notificationData,
    totalNotifications,
    totalSubscribers,
    subscriberCategories,
    notificationCategories,
    notificationValues,
    subscriberValues,
    channelList,
    isChannelDataLoading,
    isStatisticDataLoading,
    selectedChain,
    selectedChannel,
    setSelectedChain,
    setSelectedChannel,
  }: DataContextType = useData();
  const [showChannel, setShowChannel] = React.useState(false);
  const [showChain, setShowChain] = React.useState(false);
  const [selectedFilter, setSelectedFilter] = React.useState(6);
  const [startDate, setStartDate] = React.useState(new Date('2022-01-01'));
  const [endDate, setEndDate] = React.useState(new Date());
  const [min, setMin] = React.useState<any>(new Date('2022-01-01').getTime());
  const [max, setMax] = React.useState<any>(new Date().getTime());
  const [interval, setInterval] = React.useState(
    Math.ceil(
      Math.ceil(
        Math.abs(new Date('2022-01-01').getTime() - new Date().getTime()) /
          (1000 * 60 * 60 * 24)
      ) / 12
    )
  );

  useStatisticData({
    selectedChannel,
    selectedChain,
    startDate,
    endDate,
    // interval
  });

  useChannelStatistics({
    startDate,
    endDate,
    selectedChain,
  });

  React.useEffect(() => {
    const dateArray = getDatesArray({
      start: startDate,
      end: endDate,
      interval,
    });

    setMin(dateArray[0]);
    setMax(dateArray[dateArray.length - 1]);
  }, []);

  const handleChannelChange = (channel: {
    icon: string;
    name: string;
    channel: string;
  }) => {
    setShowChannel(false);
    setShowChain(false);
    setSelectedChannel?.(channel);
  };

  const handleChainChange = (chain: {
    image: string;
    chain: string;
    value: string;
  }) => {
    setShowChain(false);
    setShowChannel(false);
    setSelectedChain?.(chain);
  };

  const handle1Day = () => {
    setMin(Date.now() - 2 * 86400000);
    setStartDate(new Date(Date.now() - 2 * 86400000));
    setInterval(1);
  };

  const handle7Day = () => {
    setMin(Date.now() - 7 * 86400000);
    setStartDate(new Date(Date.now() - 7 * 86400000));
    setInterval(1);
  };

  const handle30Day = () => {
    setMin(Date.now() - 30 * 86400000);
    setStartDate(new Date(Date.now() - 30 * 86400000));
    setInterval(4);
  };

  const handle1Year = () => {
    // const noOfDaysOfYear =
    //   (year % 4 == 0 && year % 100 != 0) || year % 400 == 0 ? 366 : 355;
    if (new Date(Date.now() - 365 * 86400000) < new Date('2022-01-01')) {
      setMin(new Date('2022-01-01').getTime());
      setStartDate(new Date('2022-01-01'));
    } else {
      setMin(Date.now() - 365 * 86400000);
      setStartDate(new Date(Date.now() - 365 * 86400000));
    }
    setInterval(30);
  };

  const handleYTD = () => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    setMin(new Date(`${currentYear}-01-01`).getTime());
    setStartDate(new Date(`${currentYear}-01-01`));
    if (currentMonth <= 2) {
      setInterval(1);
    } else {
      const interval = Math.ceil(
        Math.ceil(
          Math.abs(
            new Date(`${currentYear}-01-01`).getTime() - new Date().getTime()
          ) /
            (1000 * 60 * 60 * 24)
        ) / 12
      );
      setInterval(interval);
    }
  };

  const handleTillDate = () => {
    setMin(new Date('2022-01-01').getTime());
    setStartDate(new Date('2022-01-01'));
    setMax(Date.now());
    const interval = Math.ceil(
      Math.ceil(
        Math.abs(new Date('2022-01-01').getTime() - new Date().getTime()) /
          (1000 * 60 * 60 * 24)
      ) / 12
    );
    setInterval(interval);
  };

  const handleTimeFilter = (time: any) => {
    switch (time) {
      case '1D':
        handle1Day();
        break;
      case '7D':
        handle7Day();
        break;
      case '1M':
        handle30Day();
        break;
      case 'YTD':
        handleYTD();
        break;
      case '1Y':
        handle1Year();
        break;
      case 'ALL':
        handleTillDate();
        break;
      default:
        console.log('No option');
    }
  };

  const fallbackNotificationsNumber = 139000000;

  const fallbackSubscriberCount = 300000;
  return (
    <>
      {/* <Grid
        item
        display="flex"
        width="100%"
        justifyContent="space-between"
        flexWrap="wrap"
        mt={isMobile ? 3 : 8}
        mb={0}
        xs={12}
        sm={6}
        md={6}
        lg={6}
      >
        <Filters
          selectedChannel={selectedChannel}
          selectedChain={selectedChain}
          channelList={channelList}
          chainList={CHAIN_LIST}
          handleChainChange={handleChainChange}
          handleChannelChange={handleChannelChange}
          showChannel={showChannel}
          setShowChannel={setShowChannel}
          showChain={showChain}
          setShowChain={setShowChain}
          TimeFilterOptions={TIME_FILTERS}
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
          handleTimeFilter={handleTimeFilter}
          channelDataLoading={isChannelDataLoading}
        />
      </Grid> */}
      {/* <Box
        sx={{ display: 'flex', width: '100%', justifyContent: 'flex-start' }}
      >
        <Text size="18px" marginTop={5}>
          Notifications Statistics
        </Text>
      </Box> */}
      {/* <Grid
        container
        spacing={isMobile ? 0 : 3}
        justifyContent="flex-start"
        mt={0}
      >
        <Notifications
          isLoading={isStatisticDataLoading}
          data={notificationData}
          max={max}
          min={min}
          total={
            totalNotifications || fallbackNotificationsNumber.toLocaleString()
          }
        />
        <HorizontalLine />
        <Subscribers
          isLoading={isStatisticDataLoading}
          data={subscriberData}
          max={max}
          min={min}
          total={totalSubscribers || fallbackSubscriberCount.toLocaleString()}
        />
        <HorizontalBarChart
          title="Subscribers By Channel"
          label="Subscribers"
          category={subscriberCategories}
          value={subscriberValues}
          isLoading={isChannelDataLoading}
        />
        <HorizontalLine /> */}
      {/* <HorizontalBarChart
          title="Notifications By Channel"
          label="Notifications"
          category={notificationCategories}
          value={notificationValues}
          isLoading={isChannelDataLoading}
        /> */}
      {/* </Grid> */}
      {/* <Box
        sx={{ display: 'flex', width: '100%', justifyContent: 'flex-start' }}
      >
        <Text size="18px" marginTop={5}>
          Chat Statistics
        </Text>
      </Box>
      <Grid container spacing={isMobile ? 0 : 3} justifyContent="center" mt={0}>
        <RequestSent
          data={notificationData}
          max={max}
          min={min}
          total={totalNotifications}
        />
        <HorizontalLine />
        <ChatUsers
          data={subscriberData}
          max={max}
          min={min}
          total={totalSubscribers}
        />
      </Grid> */}
    </>
  );
}
