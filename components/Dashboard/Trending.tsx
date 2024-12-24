// React, NextJS imports
import React from 'react';

// Internal Components imports
import LeaderBoard from '../Reusables/LeaderBoard';
import { getSubscribers } from '../../utils/api';
import { CHAIN_LIST } from '../../utils/constants';
import { LeaderboardType } from '../../types/otherTypes';

const data = [
  {
    channel: '0xB88460Bb2696CAb9D66013A05dFF29a28330689D',
    name: 'Push Protocol',
    icon: 'https://backend.epns.io/apis/v1/channels/icon/0xB88460Bb2696CAb9D66013A05dFF29a28330689D',
    subscriber: 91630,
  },
  {
    channel: '0x90A48D5CF7343B08dA12E067680B4C6dbfE551Be',
    name: 'ShapeShift',
    icon: 'https://backend.epns.io/apis/v1/channels/icon/0x90A48D5CF7343B08dA12E067680B4C6dbfE551Be',
    subscriber: 32473,
  },
  {
    channel: '0xe56f1D3EDFFF1f25855aEF744caFE7991c224FFF',
    name: 'CoinDesk',
    icon: 'https://backend.epns.io/apis/v1/channels/icon/0xe56f1D3EDFFF1f25855aEF744caFE7991c224FFF',
    subscriber: 10944,
  },
  {
    channel: '0xf1A1542Ca902AE861B59bffE77D92E8CD76146f1',
    name: 'HyperLiquid',
    icon: 'https://backend.epns.io/apis/v1/channels/icon/0xf1A1542Ca902AE861B59bffE77D92E8CD76146f1',
    subscriber: 53,
  },
  {
    channel: '0x76bA9825A5F707F133124E4608F1F2Dd1EF4006a',
    name: 'Cow Protocol',
    icon: 'https://backend.epns.io/apis/v1/channels/icon/0x76bA9825A5F707F133124E4608F1F2Dd1EF4006a',
    subscriber: 185,
  },
];

export default function Trending() {
  const [leaderBoard, setLeaderBoard] = React.useState<LeaderboardType[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    (async () => {
      setIsLoading(true);
      let trendingChannelData: LeaderboardType[] = [];
      let currentSubscriberData = {};
      let weekBackSubscriberData = {};

      const firstEndDate = new Date(Date.now()).toISOString().split('T')[0];
      const secondEndDate = new Date(Date.now() - 7 * 86400000)
        .toISOString()
        .split('T')[0];
      const startDate = new Date('2022-01-01');

      const currentRes = await getSubscribers({
        startDate,
        endDate: firstEndDate,
        channel: 'All',
        chain: CHAIN_LIST[1].value,
      });

      const weekRes = await getSubscribers({
        startDate,
        endDate: secondEndDate,
        channel: 'All',
        chain: CHAIN_LIST[1].value,
      });

      const weekChannelDataResponse = weekRes?.subscriberAnalytics;
      const currentChannelDataResponse = currentRes?.subscriberAnalytics;
      const channelDetails = weekRes?.channelDetails;

      for (let i = 0; i < currentChannelDataResponse?.length; i++) {
        for (let key in currentChannelDataResponse[i]) {
          if (key === 'date') {
            continue;
          } else {
            if (currentSubscriberData[key]) {
              currentSubscriberData[key] +=
                currentChannelDataResponse[i][key]?.subscriber;
            } else {
              currentSubscriberData[key] = 0;
              currentSubscriberData[key] +=
                currentChannelDataResponse[i][key]?.subscriber;
            }
          }
        }
      }
      for (let i = 0; i < weekChannelDataResponse?.length; i++) {
        for (let key in weekChannelDataResponse[i]) {
          if (key === 'date') {
            continue;
          } else {
            if (weekBackSubscriberData[key]) {
              weekBackSubscriberData[key] +=
                weekChannelDataResponse[i][key]?.subscriber;
            } else {
              weekBackSubscriberData[key] = 0;
              weekBackSubscriberData[key] +=
                weekChannelDataResponse[i][key]?.subscriber;
            }
          }
        }
      }

      for (let key in weekBackSubscriberData) {
        let finalValue = currentSubscriberData[key] || 0;
        const trend = (
          ((finalValue - weekBackSubscriberData[key]) /
            weekBackSubscriberData[key]) *
          100
        ).toFixed(2);
        trendingChannelData.push({
          channel: key,
          subscriber: currentSubscriberData[key],
          name: channelDetails[key]?.name,
          icon: channelDetails[key]?.icon,
          trend: trend,
        });
      }

      const filteredChannels = trendingChannelData.filter(
        (channel) => channel.subscriber > 30
      );

      const sortedChannels = filteredChannels?.sort(
        (a, b) => parseFloat(b?.trend) - parseFloat(a?.trend)
      );
      setLeaderBoard(sortedChannels.slice(0, 5));
      setIsLoading(false);
    })();
  }, []);

  return (
    <LeaderBoard
      title="Trending"
      // data={leaderBoard}
      data={data}
      // isTrending={true} // not showing trends for now as we don't have that data in static response
      isTrending={false}
      //isLoading={isLoading}
      isLoading={false}
    />
  );
}
