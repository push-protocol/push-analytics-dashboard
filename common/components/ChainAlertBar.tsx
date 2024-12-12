import React from 'react';
import styled from 'styled-components';
import { Front, Sale } from '../../blocks';

type AlertBarProps = {
  bannerText: string;
  bannerURL: string;
  bannerTextPrefix?: string;
  prefixURL;
};

const ChainAlertBar = ({
  bannerText,
  bannerURL,
  bannerTextPrefix,
  prefixURL,
}: AlertBarProps) => {
  return (
    <HeroButton
      onClick={() => {
        if (bannerURL) window.open(bannerURL, '_blank');
      }}
    >
      <Sale size={16} color="icon-brand-subtle" />
      <AlertText>
        <AlertTextPrefix
          onClick={(e) => {
            e.stopPropagation();
            window.open(prefixURL, '_blank');
          }}
        >
          {bannerTextPrefix}
        </AlertTextPrefix>{' '}
        {bannerText}
      </AlertText>
      <Front size={16} color="icon-brand-subtle" />
    </HeroButton>
  );
};

const HeroButton = styled.div`
  font-family: 'FK Grotesk Neue', sans-serif;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
  gap: 8px;
  margin: 0 auto;
  width: -webkit-fill-available;

  border-radius: 16px;
  border: 1px solid var(--stroke-secondary, #313338);
  background: var(--surface-primary, #202124);
  cursor: pointer;

  @media (max-width: 768px) {
    gap: 6px;
  }

  @media (max-width: 480px) {
    gap: 6px;
    padding: 12px 10px;
    box-sizing: border-box;
  }
`;

const AlertText = styled.span`
  font-family: var(--font-family);
  color: var(--text-primary, #f5f6f8);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

const AlertTextPrefix = styled(AlertText)`
  color: var(--text-brand-medium, #cf59e2);
`;

export default ChainAlertBar;
