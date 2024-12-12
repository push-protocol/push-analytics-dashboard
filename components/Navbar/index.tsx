// React, NextJS imports
import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

// External Library imports
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { css } from 'styled-components';

// Internal Components imports
import { useTheme as Theme } from '../../contexts/ThemeContext';
import { Box, Text, Lozenge, PushLogo } from '../../blocks';
import SearchBar from '../Home/SearchBar';

export default function Navbar() {
  const { isDarkMode, darkModeToggle } = Theme();

  const router = useRouter();
  const { asPath } = useRouter();

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      alignSelf="center"
      padding="spacing-sm spacing-none"
      maxWidth="1100px"
      width="calc(100% - (var(--spacing-sm) * 2))"
      gap="spacing-xs"
    >
      <Box
        alignItems={{ initial: 'center', ml: 'flex-start' }}
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        width="100%"
      >
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          gap="spacing-xs"
        >
          <Box
            display="flex"
            flexDirection={{ initial: 'row', ml: 'column' }}
            alignItems="center"
            gap={{ initial: 'spacing-xxxs', ml: 'spacing-none' }}
            cursor="pointer"
            onClick={() => router.push('/home')}
          >
            <Box display="flex" gap="spacing-xxxs" alignItems="center">
              <PushLogo height={43} width={43} />
              <Text variant="h4-regular" color="text-primary">
                PushScan
              </Text>
            </Box>

            <Lozenge
              size="small"
              variant="primary"
              css={css`
                margin-left: 10px;
              `}
            >
              ALPHA
            </Lozenge>
          </Box>
        </Box>

        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          gap={{ initial: 'spacing-sm', ml: 'spacing-none' }}
          margin={{ ml: 'spacing-xxs' }}
        >
          {/* {asPath !== '/dashboard' && (
            <Link href="https://push.org/chain/ecosystem" target="_blank">
              <Text variant="h6-semibold" color="text-primary">
                App Ecosystem
              </Text>
            </Link>
          )} */}

          <DarkModeSwitch
            style={{ margin: '0 1rem' }}
            checked={isDarkMode}
            onChange={darkModeToggle}
            size={28}
            sunColor="#494D5F"
            moonColor="#787E99"
          />

          {asPath !== '/home' && (
            <Box display={{ initial: 'flex', ml: 'none' }} minWidth="330px">
              <SearchBar />
            </Box>
          )}
        </Box>
      </Box>
      <Box
        display={{ initial: 'none', ml: 'flex' }}
        flexDirection="column"
        gap="spacing-xs"
        width="-webkit-fill-available"
      >
        {asPath === '/home' && (
          <Text variant="h3-semibold" color="text-primary">
            Push Blockchain Explorer
          </Text>
        )}
        <SearchBar />
      </Box>
    </Box>
  );
}
