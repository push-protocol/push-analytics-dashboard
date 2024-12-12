// React, NextJS imports
import React, { useState } from 'react';

// External Components imports
import { css } from 'styled-components';
import moment from 'moment';

// Internal Components imports
import { Box, Text, Tag, Tooltip, Copy } from '../../blocks';
import { CopyFilled, Tick, TickCircleFilled } from '../../blocks/icons';
import { TagVariant } from '../../blocks/tag';
import { Transaction } from '../../types/transaction';
import BlockHashLink from '../Reusables/BlockHashLink';
import { capitalizeStr } from '../../utils/helpers';

interface IProps {
  data: Transaction | null | undefined;
  isLoading: boolean;
}

const TXDetails = (props: IProps) => {
  let status: TagVariant = 'default';
  const [tooltipText, setToolTipText] = useState('Copy');

  if (props.data?.status) {
    status = props.data.status.toLowerCase() as TagVariant;
  }

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
        <DetailRow label="Transaction Hash">
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            gap="spacing-xxs"
          >
            <Text
              variant="h6-semibold"
              color="text-primary"
              css={css`
                word-break: break-all;
              `}
            >
              {props.data?.txnHash}
            </Text>
            <Box display="flex" justifyContent="flex-end" cursor="pointer">
              <Tooltip title={tooltipText}>
                <Box display="flex" justifyContent="flex-end" cursor="pointer">
                  {tooltipText === 'Copied' ? (
                    <TickCircleFilled
                      autoSize
                      size={16}
                      color="icon-state-success-bold"
                    />
                  ) : (
                    <CopyFilled
                      onClick={() => copyData(props.data?.txnHash)}
                      autoSize
                      size={16}
                      color="icon-tertiary"
                    />
                  )}
                </Box>
              </Tooltip>
            </Box>
          </Box>
        </DetailRow>
        <DetailRow label="Status">
          <Tag
            icon={<Tick />}
            label={capitalizeStr(status)}
            variant={status}
          ></Tag>
        </DetailRow>

        <DetailRow label="Block Hash">
          <BlockHashLink blockHash={props.data?.blockHash} />
        </DetailRow>

        <DetailRow label="Category">
          <Text variant="bs-regular" color="text-primary">
            {props.data?.category}
          </Text>
        </DetailRow>

        <DetailRow label="Timestamp">
          <Text variant="bs-regular" color="text-tertiary">
            {dateTime}
          </Text>
        </DetailRow>
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
            Transaction Hash
          </Text>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            gap="spacing-xxs"
          >
            <Box
              css={css`
                word-break: break-all;
                overflow-wrap: break-word;
              `}
            >
              <Text variant="bs-regular" color="text-primary" wrap>
                {props.data?.txnHash}
              </Text>
            </Box>
            {tooltipText === 'Copied' ? (
              <TickCircleFilled
                autoSize
                size={16}
                color="icon-state-success-bold"
              />
            ) : (
              <CopyFilled
                onClick={() => copyData(props.data?.txnHash)}
                autoSize
                size={16}
                color="icon-tertiary"
              />
            )}
          </Box>
        </Box>

        <Box display="flex" flexDirection="column" gap="spacing-xxxs">
          <Text variant="bs-semibold" color="text-secondary">
            Status
          </Text>
          <Tag
            icon={<Tick />}
            label={capitalizeStr(status)}
            variant={status}
          ></Tag>
        </Box>

        <Box display="flex" flexDirection="column" gap="spacing-xxxs">
          <Text variant="bs-semibold" color="text-secondary">
            Block Hash
          </Text>
          <Box
            css={css`
              word-break: break-all;
              overflow-wrap: break-word;
            `}
          >
            <BlockHashLink blockHash={props.data?.blockHash} />
          </Box>
        </Box>

        <Box display="flex" flexDirection="column" gap="spacing-xxxs">
          <Text variant="bs-semibold" color="text-secondary">
            Category{' '}
          </Text>
          <Text variant="bs-regular" color="text-primary">
            {props.data?.category}
          </Text>
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

export default TXDetails;

const DetailRow = ({ label, children }) => (
  <Box display="flex" width="-webkit-fill-available">
    <Box
      css={css`
        flex: 1;
      `}
    >
      <Text variant="h6-semibold" color="text-secondary">
        {label}
      </Text>
    </Box>
    <Box
      css={css`
        flex: 3;
      `}
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
