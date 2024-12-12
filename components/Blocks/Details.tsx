// React, NextJS imports
import React, { useState } from 'react';

// External Components imports
import { css } from 'styled-components';
import moment from 'moment';

// Internal Components imports
import { Box, Text, Tooltip, TickCircleFilled, CopyFilled } from '../../blocks';
import { BlockDetails } from '../../types/block';
import { getValidatorNode } from '../../utils/helpers';
import { CopyTooltip } from '../Reusables/CopyTooltip';

interface IProps {
  data: BlockDetails | null | undefined;
  isLoading: boolean;
}

const Details = (props: IProps) => {
  const [tooltipText, setToolTipText] = useState('Copy');

  let dateTime = '';
  if (props.data?.ts) {
    const timestamp = props.data?.ts / 1000;
    const formattedTime = moment.unix(timestamp).utc().fromNow(); // "40 minutes ago"
    const detailedTime = moment
      .unix(timestamp)
      .utc()
      .format('ddd, MMM DD YYYY HH:mm:ss [GMT]'); // "Sun, Jul 21 2024 18:33:47 GMT"
    dateTime = `${formattedTime}, ${detailedTime}`;
  }

  const copyData = (value) => {
    navigator.clipboard.writeText(value);
    setToolTipText('Copied');

    setTimeout(() => {
      setToolTipText('Copy');
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
        gap="spacing-sm"
        padding="spacing-md"
      >
        <DetailOutline label="Block Hash">
          <>
            <Text
              variant="bs-regular"
              color="text-primary"
              css={css`
                word-break: break-all;
              `}
            >
              {props.data?.blockHash}
            </Text>
            <Box display="flex" justifyContent="flex-end" cursor="pointer">
              <CopyTooltip
                tooltipText={tooltipText}
                copyFunc={() => copyData(props.data?.blockHash)}
              />
            </Box>
          </>
        </DetailOutline>
        <DetailOutline label="Validator">
          <Text variant="bs-regular" color="text-primary">
            {getValidatorNode(props.data?.blockDataAsJson)}
          </Text>
        </DetailOutline>
        <DetailOutline label="Timestamp">
          <Text variant="bs-regular" color="text-tertiary">
            {dateTime}
          </Text>
        </DetailOutline>
      </Box>

      {/* Mobile View */}
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
        <Box display="flex" flexDirection="column" gap="spacing-xxxs">
          <Text variant="bs-semibold" color="text-secondary">
            Block Hash
          </Text>

          <Box
            css={css`
              word-break: break-all;
              overflow-wrap: break-word;
            `}
            display="flex"
            gap="spacing-xxs"
            alignItems="center"
          >
            <Text variant="bs-regular" color="text-primary" wrap>
              {props.data?.blockHash}
            </Text>
            <CopyTooltip
              tooltipText={tooltipText}
              copyFunc={() => copyData(props.data?.blockHash)}
            />
          </Box>
        </Box>

        <Box display="flex" flexDirection="column" gap="spacing-xxxs">
          <Text variant="bs-semibold" color="text-secondary">
            Validator
          </Text>
          <Box
            css={css`
              word-break: break-all;
              overflow-wrap: break-word;
            `}
          >
            <Text variant="bs-regular" color="text-primary" wrap>
              {getValidatorNode(props.data?.signers)}
            </Text>
          </Box>
        </Box>

        <Box display="flex" flexDirection="column" gap="spacing-xxxs">
          <Text variant="bs-semibold" color="text-secondary">
            Timestamp
          </Text>
          <Text variant="bs-regular" color="text-tertiary">
            {dateTime}
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default Details;

const DetailOutline = ({ label, children }) => (
  <Box display="flex" width="-webkit-fill-available">
    <Box width="25%">
      <Text variant="bs-semibold" color="text-secondary">
        {label}
      </Text>
    </Box>
    <Box
      width="75%"
      display="flex"
      flexDirection="row"
      justifyContent="flex-start"
      alignItems="center"
      gap="spacing-xxs"
    >
      {children}
    </Box>
  </Box>
);
