// React, NextJS imports
import React from 'react';
import Image from 'next/image';

// External Library imports
import { useTheme } from 'styled-components';
import { useMediaQuery, useScrollTrigger } from '@mui/material';

// Internal Components imports
import { OverviewItem } from './overview.styled';
import { Text } from '../../Reusables/SharedStyling';
import { getChats, getUsers, getNotifications } from '../../../utils/api';
import { useData } from '../../../contexts/DataContext';
import { useTheme as getTheme } from '../../../contexts/ThemeContext';
import { ItemHV2, ItemVV2 } from '../../Reusables/SharedStyling';
import { DATA_KEYS, CHAIN_LIST } from '../../../utils/constants';
import { ThemeType } from '../../../types/theme';
import IntegrationLightIcon from '../../../public/static/push-integration.svg';
import IntegrationDarkIcon from '../../../public/static/push-integration-dark.svg';
import ChatSentLightIcon from '../../../public/static/chat-sent.svg';
import ChatSentDarkIcon from '../../../public/static/chat-sent-dark.svg';
import ChatUsersLightIcon from '../../../public/static/chat-user.svg';
import ChatUsersDarkIcon from '../../../public/static/chat-user-dark.svg';
import NotificationsLightIcon from '../../../public/static/notifications.svg';
import NotificationsDarkIcon from '../../../public/static/notifications-dark.svg';
import { OverviewLoader } from '../../Loader/OverviewLoader';

export default function OverViewSet() {
  const {
    pushIntegrations,
    setChatSent,
    setChatUsers,
    setNotificationsSent,
    chatSent,
    notifiactionsSent,
    overViewLoading,
    setOverviewLoading,
  } = useData();
  const { isDarkMode } = getTheme();
  const isMobile = useMediaQuery('(max-width:480px)');

  const fallbackNotificationNumber = 140902329;

  const fallbackChatNumber = 58834;
  const overViewData = [
    {
      image: !isDarkMode ? IntegrationLightIcon : IntegrationDarkIcon,
      title: 'Push Integrations',
      value: pushIntegrations,
      size: 60,
    },
    {
      image: !isDarkMode ? ChatSentLightIcon : ChatSentDarkIcon,
      title: 'Chats Sent',
      value: chatSent || fallbackChatNumber.toLocaleString(),
      size: 51,
    },
    // {
    //   image: !isDarkMode
    //     ? ChatUsersLightIcon
    //     : ChatUsersDarkIcon,
    //   title: 'Chat Users',
    //   value: chatUsers,
    //   size: 65,
    // },
    {
      image: !isDarkMode ? NotificationsLightIcon : NotificationsDarkIcon,
      title: 'Notifications Sent',
      value: notifiactionsSent || fallbackNotificationNumber.toLocaleString(),
      size: 41,
    },
  ];
  const theme = useTheme() as ThemeType;

  React.useEffect(() => {
    (async () => {
      notifiactionsSent > 0
        ? setOverviewLoading(false)
        : setOverviewLoading(true);
      let total = 0;
      const chatResponse = await getChats();
      sessionStorage.setItem(
        DATA_KEYS.CHAT_SENT,
        JSON.stringify(chatResponse?.totalMessages)
      );
      setChatSent(chatResponse?.totalMessages);

      const userResponse = await getUsers();
      sessionStorage.setItem(
        DATA_KEYS.CHAT_USERS,
        JSON.stringify(userResponse?.totalUsers)
      );
      setChatUsers(userResponse?.totalUsers);

      const notificationResponse = await getNotifications({
        startDate: new Date('2022-01-01'),
        endDate: new Date(),
        channel: 'All',
        chain: CHAIN_LIST[0].value,
      });
      const notifictionAnalyticsData =
        notificationResponse?.notificationAnalytics;

      for (let i = 0; i < notifictionAnalyticsData?.length; i++) {
        for (let key in notifictionAnalyticsData[i]) {
          if (key === 'date') {
            continue;
          } else {
            total += notifictionAnalyticsData[i][key]?.notification;
          }
        }
      }
      sessionStorage.setItem(
        DATA_KEYS.NOTIFICATIONS_SENT,
        JSON.stringify(total)
      );
      setNotificationsSent(total);
      setOverviewLoading(false);
    })();
  }, []);

  return (
    <ItemVV2
      width="100%"
      margin={isMobile ? '25px 0px 30px' : '50px 0px 30px'}
      alignItems="flex-start"
    >
      <Text size="18px" weight={400} marginBottom="20px">
        Overview
      </Text>
      <ItemHV2
        width="100%"
        gap="23px"
        justifyContent="space-between"
        marginTop="20px"
      >
        {overViewData.map((data, index) => (
          <OverviewItem
            key={data.title}
            padding={overViewLoading ? '25px' : '25px 30px 22px 40px'}
            style={{
              backgroundColor: theme.background.card,
              border: `1px solid ${theme.background.border}`,
              height: '114px',
            }}
          >
            {!overViewLoading ? (
              <>
                <ItemVV2 alignItems="flex-start" justifyContent="center">
                  <Text size="18px" weight={500}>
                    {data.title}
                  </Text>

                  <Text size="36px" weight={500}>
                    {data.value?.toLocaleString()}
                    {index == 0 ? '+' : null}
                  </Text>
                </ItemVV2>
                <Image
                  src={data.image}
                  width={data.size}
                  height={data.size}
                  alt="Overview"
                />
              </>
            ) : (
              <OverviewLoader key={data.title} />
            )}
          </OverviewItem>
        ))}
      </ItemHV2>
    </ItemVV2>
  );
}
