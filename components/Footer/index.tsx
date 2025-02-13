// React, NextJS imports
import React from 'react';
import Image from 'next/image';

// External Library imports
import { useTheme } from 'styled-components';

// Internal Components imports
import {
  FooterContainer,
  LinkContainer,
  LeftContainer,
  RightContainer,
} from './footer.styled';
import { useTheme as Theme } from '../../contexts/ThemeContext';
import { Text } from '../Reusables/SharedStyling';
import { ThemeType } from '../../types/theme';
import PushLogoLight from '../../public/static/push-logo-2.svg';
import PushLogoDark from '../../public/static/push-logo-1.svg';
import TwitterIconDark from '../../public/static/twitter-dark.svg';
import TwitterIconLight from '../../public/static/twitter.svg';
import GithubIconDark from '../../public/static/github-dark.svg';
import GithubIconLight from '../../public/static/github.svg';
import DiscordIconDark from '../../public/static/discord-dark.svg';
import DiscordIconLight from '../../public/static/discord.svg';

export default function Footer() {
  const { isDarkMode } = Theme();
  const theme = useTheme() as ThemeType;
  return (
    <FooterContainer>
      <LeftContainer>
        <a href="https://www.push.org" target={'_blank'} rel={'noreferrer'}>
          <Image
            alt="Push Logo"
            width={125}
            height={48}
            src={isDarkMode ? PushLogoDark : PushLogoLight}
          />
        </a>
        <LinkContainer>
          <a href="https://push.org/tos" target={'_blank'} rel={'noreferrer'}>
            <Text color={theme.text.link}>Terms</Text>
          </a>
          <a
            href="https://push.org/privacy"
            target={'_blank'}
            rel={'noreferrer'}
          >
            <Text color={theme.text.link}>Privacy</Text>
          </a>
          <a
            href="https://docs.push.org/hub/"
            target={'_blank'}
            rel={'noreferrer'}
          >
            <Text color={theme.text.link}>Docs</Text>
          </a>
        </LinkContainer>
      </LeftContainer>
      <RightContainer>
        <a href="https://x.com/PushChain" target={'_blank'} rel={'noreferrer'}>
          <Image
            alt="Twitter"
            height={24}
            width={30}
            src={isDarkMode ? TwitterIconDark : TwitterIconLight}
          />
        </a>
        <a
          href="https://github.com/ethereum-push-notification-service/"
          target={'_blank'}
          rel={'noreferrer'}
        >
          <Image
            alt="Github"
            height={26}
            width={26}
            src={isDarkMode ? GithubIconDark : GithubIconLight}
          />
        </a>
        <a
          href="https://discord.com/invite/pushprotocol"
          target={'_blank'}
          rel={'noreferrer'}
        >
          <Image
            alt="Discord"
            height={23}
            width={32}
            src={isDarkMode ? DiscordIconDark : DiscordIconLight}
          />
        </a>
      </RightContainer>
    </FooterContainer>
  );
}
