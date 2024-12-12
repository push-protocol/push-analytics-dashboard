// React, NextJS imports
import React, { useState } from 'react';

// External Components imports
import { css } from 'styled-components';

// Internal Components imports
import { Box, Text, Tooltip, Copy } from '../../blocks';
import { BlockDetails } from '../../types/block';
import { buildNodeVotes } from '../../utils/helpers';
import { PushMonotone } from '../../blocks/icons';
import { CopyTooltip } from '../Reusables/CopyTooltip';

interface IProps {
  data: BlockDetails | null | undefined;
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

  const nodes = buildNodeVotes(props.data?.blockDataAsJson);

  const displayedNodes = showAll ? nodes : nodes.slice(0, MAX_DISPLAY_NODES);
  const showMoreButton = nodes.length > MAX_DISPLAY_NODES;

  const payload = props.data?.blockData || '';
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
          <Box display="flex" width="25%">
            <Text variant="bs-semibold" color="text-secondary">
              Consensus Info
            </Text>
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            gap="spacing-xs"
            width="75%"
          >
            {displayedNodes.map((node, index) => (
              <Box key={node.node} display="flex">
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="center"
                  gap="spacing-xxs"
                >
                  <PushMonotone size={20} />
                  <Text key={index} variant="bs-regular" color="text-primary">
                    {node.node}
                  </Text>
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

        <Box display="flex" flexDirection="row" width="100%">
          <Box display="flex" width="25%">
            <Text variant="bs-semibold" color="text-secondary">
              Payload Data
            </Text>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            gap="spacing-xxs"
            border="border-sm solid stroke-tertiary"
            borderRadius="radius-xs"
            padding="spacing-sm"
            maxHeight="196px"
            customScrollbar
            width="75%"
          >
            <Box overflow="auto" customScrollbar>
              <Text
                variant="bs-semibold"
                color="text-tertiary"
                css={css`
                  word-break: break-all;
                  overflow-wrap: break-word;
                `}
              >
                {payload}
              </Text>
            </Box>

            <Box display="flex" justifyContent="flex-end" cursor="pointer">
              <CopyTooltip tooltipText={tooltipText} copyFunc={copyPayload} />
            </Box>
          </Box>
        </Box>
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
                alignItems="center"
                gap="spacing-xs"
              >
                <PushMonotone />
                <Box
                  css={css`
                    word-break: break-all;
                    overflow-wrap: break-word;
                  `}
                >
                  <Text key={index} variant="bs-regular" color="text-primary">
                    {node.node}
                  </Text>
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

        <Box display="flex" flexDirection="column" gap="spacing-xs">
          <Text variant="bs-semibold" color="text-secondary">
            Payload Data
          </Text>

          <Box
            display="flex"
            flexDirection="column"
            border="border-sm solid stroke-tertiary"
            borderRadius="radius-xs"
            padding="spacing-sm"
            width="100%"
            maxWidth="750px"
            maxHeight="196px"
            gap="spacing-xxs"
          >
            <Box overflow="auto" customScrollbar>
              <Text
                variant="bs-semibold"
                color="text-tertiary"
                css={css`
                  word-break: break-all;
                  overflow-wrap: break-word;
                `}
              >
                {payload}
              </Text>
            </Box>

            <Box display="flex" justifyContent="flex-end" cursor="pointer">
              <CopyTooltip tooltipText={tooltipText} copyFunc={copyPayload} />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ConsensusInfo;
