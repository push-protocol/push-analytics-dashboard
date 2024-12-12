// React, NextJS imports
import React, { useState } from 'react';
import Link from 'next/link';

// External Components imports
import styled from 'styled-components';

// Internal Components imports
import { Box, Text, Tooltip, Copy, TickCircleFilled } from '../../blocks';
import { rightMaskString } from '../../utils/helpers';

const TxHashLinkComponent = ({ txHash, allowCopy = false }) => {
  const [tooltipText, setToolTipText] = useState('Copy');

  const copyData = () => {
    navigator.clipboard.writeText(txHash);
    setToolTipText('Copied');

    setTimeout(() => {
      setToolTipText('Copy');
    }, 1000);
  };

  return (
    <TxHashContainer>
      <TxHashLinkStyled href={`/transactions/${txHash}`}>
        <TxHashText variant="bs-regular">{rightMaskString(txHash)}</TxHashText>
      </TxHashLinkStyled>
      {allowCopy && (
        <CopyIconButton onClick={copyData}>
          <Tooltip title={tooltipText}>
            {tooltipText === 'Copied' ? (
              <TickCircleFilled
                autoSize
                size={16}
                color="icon-state-success-bold"
              />
            ) : (
              <Copy autoSize size={16} color="icon-tertiary" />
            )}
          </Tooltip>
        </CopyIconButton>
      )}
    </TxHashContainer>
  );
};

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

const TxHashText = styled(Text)`
  color: var(--text-primary);
  transition: color 0.2s ease-in-out;
`;

const TxHashLinkStyled = styled(Link)`
  text-decoration: none;
`;

const TxHashContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: spacing-xxs;
  align-items: center;

  &:hover ${CopyIconButton} {
    opacity: 1;
    pointer-events: auto;
  }

  &:hover ${TxHashText} {
    color: var(--text-brand-medium);
  }
`;

export default TxHashLinkComponent;
