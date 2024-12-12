// React, NextJS imports
import React, { useState } from 'react';
import Link from 'next/link';

// External Components imports
import styled, { css } from 'styled-components';

// Internal Components imports
import { Box, Text, Tooltip } from '../../blocks';
import { PushMonotone, TickCircleFilled, CopyFilled } from '../../blocks/icons';
import { CHAIN_LOGO } from '../../common';
import { convertCaipToObject, centerMaskString } from '../../utils/helpers';
import { CopyTooltip } from './CopyTooltip';

const Address = ({
  address,
  wrap = false,
  masking = true,
  allowCopy = false,
}) => {
  function getChainIcon(chainId) {
    if (!chainId) {
      return <PushMonotone size={20} />;
    }
    const IconComponent = CHAIN_LOGO[chainId];
    if (IconComponent) {
      return <IconComponent size={20} color="icon-tertiary" />;
    } else {
      // TO Bypass some test cases addresses
      return <PushMonotone size={20} />;
    }
  }

  const { result } = convertCaipToObject(address);

  const maskedAddress = masking
    ? centerMaskString(result.address)
    : result.address;

  const [tooltipText, setToolTipText] = useState('Copy');

  const copyData = () => {
    const addressToCopy = result.address ?? address;
    navigator.clipboard.writeText(addressToCopy);
    setToolTipText('Copied');

    setTimeout(() => {
      setToolTipText('Copy');
    }, 1000);
  };

  return (
    <AddressContainer>
      {result.chainId && getChainIcon(result.chainId)}
      <AddressLink href={`/users/${address}`}>
        <AddressText wrap={wrap} variant="bs-regular">
          {maskedAddress}
        </AddressText>
      </AddressLink>
      {allowCopy && (
        <Tooltip
          title={tooltipText}
          css={css`
            z-index: 1;
          `}
        >
          <CopyIconButton onClick={copyData}>
            {tooltipText === 'Copied' ? (
              <TickCircleFilled
                autoSize
                size={16}
                color="icon-state-success-bold"
              />
            ) : (
              <CopyFilled autoSize size={16} color="icon-tertiary" />
            )}
          </CopyIconButton>
        </Tooltip>
      )}
    </AddressContainer>
  );
};

const AddressLink = styled(Link)`
  pointer-events: none;
  text-decoration: none;
`;

const AddressText = styled(Text)`
  color: var(--text-primary);
`;

const CopyIconButton = styled.button`
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease-in-out;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
`;

const AddressContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: var(--spacing-xxs, 8px);
  align-items: center;

  &:hover ${AddressLink} {
    pointer-events: auto;
  }

  &:hover ${AddressText} {
    color: var(--text-brand-medium);
  }

  &:hover ${CopyIconButton} {
    opacity: 1;
    pointer-events: auto;
  }
`;

export default Address;
