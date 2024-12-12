// React, NextJS imports
import React, { useState } from 'react';
import Link from 'next/link';

// External Components imports
import styled from 'styled-components';

// Internal Components imports
import { Box, Text, Tooltip, Copy } from '../../blocks';
import { rightMaskString } from '../../utils/helpers';

const BlockHashLinkComponent = ({
  blockHash,
  masking = false,
  allowCopy = false,
}) => {
  const [tooltipText, setToolTipText] = useState('Copy');

  const maskedBlockHash = masking ? rightMaskString(blockHash) : blockHash;

  const copyData = () => {
    navigator.clipboard.writeText(blockHash);
    setToolTipText('Copied');

    setTimeout(() => {
      setToolTipText('Copy');
    }, 1000);
  };

  return (
    <BlockHashContainer>
      <BlockHashLink href={`/blocks/${blockHash}`}>
        <BlockHashText variant="bs-regular">{maskedBlockHash}</BlockHashText>
      </BlockHashLink>
      {allowCopy && (
        <CopyIconButton onClick={copyData}>
          <Tooltip title={tooltipText}>
            <Copy autoSize size={24} color="icon-tertiary" />
          </Tooltip>
        </CopyIconButton>
      )}
    </BlockHashContainer>
  );
};

const CopyIconButton = styled.button`
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease-in-out;
  display: flex;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
`;

const BlockHashLink = styled(Link)`
  text-decoration: none;
`;

const BlockHashText = styled(Text)`
  color: var(--text-primary);
  transition: color 0.2s ease-in-out;
`;

const BlockHashContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: spacing-xxs;
  align-items: center;

  &:hover ${CopyIconButton}, &:focus-within ${CopyIconButton} {
    opacity: 1;
    pointer-events: auto;
  }

  &:hover ${BlockHashText}, &:focus-within ${BlockHashText} {
    color: var(--text-brand-medium);
  }
`;

export default BlockHashLinkComponent;
