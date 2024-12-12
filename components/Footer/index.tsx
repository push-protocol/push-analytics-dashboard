// React, NextJS imports
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

// External Library imports
import { css } from 'styled-components';
import { getHeathCheck } from '../../utils/api';
import {
  Box,
  Text,
  TickCircleFilled,
  CrossFilled,
  Twitter,
  Github,
  Telegram,
  Discord,
} from '../../blocks';

export default function Footer() {
  const [data, setData] = useState(true);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const res = await getHeathCheck();
        setData(res.status === 'OK');
      } catch (e) {
        console.log('Error occured', e);
      }
      setIsLoading(false);
    })();
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      padding="spacing-md spacing-none"
      maxWidth="1100px"
      width="calc(100% - (var(--spacing-sm) * 2))"
      css={css`
        flex: initial;
        margin: 0 auto;
      `}
    >
      <Box display="flex" flexDirection="row" gap="spacing-sm">
        <Link
          href="https://twitter.com/PushProtocol"
          target={'_blank'}
          rel={'noreferrer'}
        >
          <Twitter color="icon-primary" size={18} />
        </Link>
        <Link
          href="https://github.com/push-protocol/"
          target={'_blank'}
          rel={'noreferrer'}
        >
          <Github color="icon-primary" size={20} />
        </Link>
        <Link
          href="https://t.me/epnsproject"
          target={'_blank'}
          rel={'noreferrer'}
        >
          <Telegram color="icon-primary" size={20} />
        </Link>

        <Link
          href="https://discord.com/invite/pushprotocol"
          target={'_blank'}
          rel={'noreferrer'}
        >
          <Discord color="icon-primary" size={20} />
        </Link>
      </Box>
      <Box display="flex" flexDirection="row" gap="spacing-xxs">
        {data ? (
          <TickCircleFilled color="icon-state-success-bold" />
        ) : (
          <CrossFilled color="icon-state-danger-bold" />
        )}
        <Text variant="bes-semibold" color="text-tertiary">
          {data ? 'All systems operational' : 'Not all system are operational'}
        </Text>
      </Box>
    </Box>
  );
}
