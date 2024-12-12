// React, NextJS imports
import React, { useState } from 'react';

// External Components imports
import { css } from 'styled-components';

// Internal Components imports
import {
  Box,
  Text,
  Tooltip,
  Copy,
  Tag,
  PushMonotone,
  Tick,
} from '../../blocks';
import { Transaction } from '../../types/transaction';
import { BlockDetails } from '../../types/block';
import { buildNodeVotes } from '../../utils/helpers';
import { CopyTooltip } from '../Reusables/CopyTooltip';

interface IProps {
  blockDetails: BlockDetails | null | undefined;
  transaction: Transaction | null | undefined;
  isLoading: boolean;
}

const MAX_DISPLAY_NODES = 5;
const MAX_DISPLAY_CHARS = 700;

const ConsensusInfo = (props: IProps) => {
  const [showAll, setShowAll] = useState(false);
  const [showAllPayload, setShowAllPayload] = useState(false);
  const [tooltipText, setToolTipText] = useState('Copy Payload');

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const toggleShowAllPayload = () => {
    setShowAllPayload(!showAllPayload);
  };

  const nodes = buildNodeVotes(props.blockDetails?.blockDataAsJson);

  const displayedNodes = showAll ? nodes : nodes.slice(0, MAX_DISPLAY_NODES);
  const showMoreButton = nodes.length > MAX_DISPLAY_NODES;
  const payload = props.transaction?.txnData || '';
  const displayedPayload = showAllPayload
    ? payload
    : payload.substring(0, MAX_DISPLAY_CHARS);
  const showMorePayloadButton = payload.length > MAX_DISPLAY_CHARS;

  const copyPayload = () => {
    if (payload) {
      navigator.clipboard.writeText(payload);
      setToolTipText('Copied');
    }
    setTimeout(() => {
      setToolTipText('Copy Payload');
    }, 1000);
  };

  return (
    <>
      <Box
        display={{ initial: 'flex', ml: 'none' }}
        flexDirection="column"
        alignItems="flex-start"
        borderRadius="radius-sm"
        border="border-xs solid stroke-secondary"
        backgroundColor="surface-primary"
        padding="spacing-md"
        gap="spacing-md"
      >
        <Box display="flex" flexDirection="row" width="100%">
          <Box
            display="flex"
            css={css`
              flex: 1;
            `}
          >
            <Text variant="bs-semibold" color="text-secondary" fullWidth>
              Consensus Info
            </Text>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            gap="spacing-xs"
            css={css`
              flex: 3;
            `}
          >
            {displayedNodes.map((node, index) => (
              <Box key={node.node} display="flex">
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="center"
                  gap="spacing-lg"
                >
                  <Box display="flex" gap="spacing-xxs">
                    <PushMonotone />
                    <Text key={index} variant="bs-regular" color="text-primary">
                      {node.node}
                    </Text>
                  </Box>
                  <Tag
                    icon={<Tick />}
                    label={`${node.vote}`}
                    variant={node.vote === 'Accepted' ? 'success' : 'danger'}
                  ></Tag>
                </Box>
              </Box>
            ))}

            {showMoreButton && (
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                gap="spacing-xxs"
                cursor="pointer"
                onClick={toggleShowAll}
              >
                <Text variant="bes-semibold" color="text-brand-medium">
                  {showAll ? 'Show Less' : 'Show More'}
                </Text>
              </Box>
            )}
          </Box>
        </Box>

        {displayedPayload && (
          <Box display="flex" flexDirection="row" width="100%">
            <Box
              display="flex"
              css={css`
                flex: 1;
              `}
            >
              <Text variant="bs-semibold" color="text-secondary">
                Payload Data
              </Text>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              gap="spacing-xs"
              border="border-sm solid stroke-tertiary"
              borderRadius="radius-xs"
              padding="spacing-xs"
              width="100%"
              css={css`
                flex: 3;
              `}
            >
              <Text
                variant="bs-semibold"
                color="text-tertiary"
                css={css`
                  word-break: break-all;
                  overflow-wrap: break-word;
                `}
              >
                {displayedPayload}
              </Text>

              {showMorePayloadButton && (
                <Box
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  gap="spacing-xxs"
                  cursor="pointer"
                  onClick={toggleShowAllPayload}
                >
                  <Text variant="bes-semibold" color="text-brand-medium">
                    {showAllPayload ? 'Show Less' : 'Show More'}
                  </Text>
                </Box>
              )}
              <Box display="flex" justifyContent="flex-end" cursor="pointer">
                <CopyTooltip tooltipText={tooltipText} copyFunc={copyPayload} />
              </Box>
            </Box>
          </Box>
        )}
      </Box>

      <Box
        display={{ initial: 'none', ml: 'flex' }}
        flexDirection="column"
        alignItems="flex-start"
        borderRadius="radius-sm"
        border="border-xs solid stroke-secondary"
        backgroundColor="surface-primary"
        gap="spacing-md"
        padding="spacing-xs"
      >
        <Box display="flex" flexDirection="column" gap="spacing-xs">
          <Box>
            <Text variant="bs-semibold" color="text-secondary">
              Consensus Info
            </Text>
          </Box>
          <Box display="flex" flexDirection="column" gap="spacing-xs">
            {displayedNodes.map((node, index) => (
              <Box
                key={node.node}
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                gap="spacing-xs"
              >
                <PushMonotone size={36} />

                <Box
                  css={css`
                    word-break: break-all;
                    overflow-wrap: break-word;
                  `}
                >
                  <Text
                    wrap
                    key={index}
                    variant="bs-regular"
                    color="text-primary"
                  >
                    {node.node}
                  </Text>
                </Box>

                <Box borderRadius="radius-xs" padding="spacing-xxs spacing-sm">
                  <Tag
                    icon={<Tick />}
                    label={`${node.vote}`}
                    variant={node.vote === 'Accepted' ? 'success' : 'danger'}
                  ></Tag>
                </Box>
              </Box>
            ))}

            {showMoreButton && (
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                gap="spacing-xxs"
                cursor="pointer"
                onClick={toggleShowAll}
              >
                <Text variant="bes-semibold" color="text-brand-medium">
                  {showAll ? 'Show Less' : 'Show More'}
                </Text>
              </Box>
            )}
          </Box>
        </Box>

        {displayedPayload && (
          <Box display="flex" flexDirection="row" gap="spacing-xxxxxl">
            <Box width="134px">
              <Text variant="bs-semibold" color="text-secondary">
                Payload Data
              </Text>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              gap="spacing-xs"
              border="border-sm solid stroke-tertiary"
              borderRadius="radius-xs"
              padding="spacing-xs"
              width="100%"
              maxWidth="750px" /* Adjust as per your layout */
            >
              <Text
                variant="bs-semibold"
                color="text-tertiary"
                css={css`
                  word-break: break-all;
                  overflow-wrap: break-word;
                `}
              >
                {displayedPayload}
              </Text>

              {showMorePayloadButton && (
                <Box
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  gap="spacing-xxs"
                  cursor="pointer"
                  onClick={toggleShowAllPayload}
                >
                  <Text variant="bes-semibold" color="text-brand-medium">
                    {showAllPayload ? 'Show Less' : 'Show More'}
                  </Text>
                </Box>
              )}
              {displayedPayload && (
                <Box display="flex" justifyContent="flex-end" cursor="pointer">
                  <CopyTooltip
                    tooltipText={tooltipText}
                    copyFunc={copyPayload}
                  />
                </Box>
              )}
            </Box>
          </Box>
        )}
      </Box>
    </>
  );
};

export default ConsensusInfo;
