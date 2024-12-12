// React, NextJS imports
import React, { useState } from 'react';

// External Components imports
import { css } from 'styled-components';

// Internal Components imports
import {
  Add,
  Box,
  Text,
  Tooltip,
  TickCircleFilled,
  CopyFilled,
} from '../../blocks';
import { Transaction } from '../../types/transaction';
import Address from '../Reusables/AddressComponent';
import { convertCaipToObject } from '../../utils/helpers';

const MAX_DISPLAY = 5;

interface IProps {
  data: Transaction | null | undefined;
  isLoading: boolean;
}

const TxTravels = (props: IProps) => {
  const [showAll, setShowAll] = useState(false);
  const [tooltipText, setToolTipText] = useState('Copy');

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const recipients = props.data?.recipients?.recipients || [];
  const displayedRecipients = showAll
    ? recipients
    : recipients.slice(0, MAX_DISPLAY);
  const showMoreButton = recipients.length > MAX_DISPLAY;

  const copyData = (value) => {
    const { result } = convertCaipToObject(value);
    const addressToCopy = result.address ?? value;

    navigator.clipboard.writeText(addressToCopy);
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
        <DetailRow label="From">
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            gap="spacing-xxs"
          >
            <Address address={props.data?.from} masking={false} />
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
                      onClick={() => copyData(props.data?.from)}
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

        <DetailRow label="To">
          <Box
            display="flex"
            flexDirection="column"
            gap="spacing-xs"
            justifyContent="flex-start"
          >
            {displayedRecipients.map((recipient, index) => (
              <Box
                key={recipient.address}
                display="flex"
                flexDirection="row"
                alignItems="center"
                gap="spacing-xxs"
              >
                <Address
                  key={index}
                  address={recipient.address}
                  masking={false}
                />
                <Box display="flex" justifyContent="flex-end" cursor="pointer">
                  <Tooltip title={tooltipText}>
                    <Box
                      display="flex"
                      justifyContent="flex-end"
                      cursor="pointer"
                    >
                      {tooltipText === 'Copied' ? (
                        <TickCircleFilled
                          autoSize
                          size={16}
                          color="icon-state-success-bold"
                        />
                      ) : (
                        <CopyFilled
                          onClick={() => copyData(recipient.address)}
                          autoSize
                          size={16}
                          color="icon-tertiary"
                        />
                      )}
                    </Box>
                  </Tooltip>
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
                <Add color="icon-brand-medium" />
                <Text variant="bes-semibold" color="text-brand-medium">
                  {showAll ? 'Show Less' : 'Show More'}
                </Text>
              </Box>
            )}
          </Box>
        </DetailRow>
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
        <Box
          display="flex"
          flexDirection="column"
          gap="spacing-xxxs"
          justifyContent="flex-start"
        >
          <Text variant="bs-semibold" color="text-secondary">
            From
          </Text>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            gap="spacing-xxs"
          >
            <Box
              css={css`
                word-break: break-all;
                overflow-wrap: break-word;
              `}
            >
              <Address address={props.data?.from} masking={false} wrap={true} />
            </Box>
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
                      onClick={() => copyData(props.data?.from)}
                      autoSize
                      size={16}
                      color="icon-tertiary"
                    />
                  )}
                </Box>
              </Tooltip>
            </Box>
          </Box>
        </Box>

        <Box display="flex" flexDirection="column" gap="spacing-sm">
          <Text variant="bs-semibold" color="text-secondary">
            To
          </Text>
          <Box
            display="flex"
            flexDirection="column"
            gap="spacing-xs"
            justifyContent="flex-start"
          >
            {displayedRecipients.map((recipient, index) => (
              <Box
                key={recipient.address}
                display="flex"
                flexDirection="row"
                alignItems="center"
                gap="spacing-xxs"
              >
                <Box
                  css={css`
                    word-break: break-all;
                    overflow-wrap: break-word;
                  `}
                >
                  <Address
                    address={recipient.address}
                    masking={false}
                    wrap={true}
                  />
                </Box>
                <Box display="flex" justifyContent="flex-end" cursor="pointer">
                  <Tooltip title={tooltipText}>
                    <Box
                      display="flex"
                      justifyContent="flex-end"
                      cursor="pointer"
                    >
                      {tooltipText === 'Copied' ? (
                        <TickCircleFilled
                          autoSize
                          size={16}
                          color="icon-state-success-bold"
                        />
                      ) : (
                        <CopyFilled
                          onClick={() => copyData(recipient.address)}
                          autoSize
                          size={16}
                          color="icon-tertiary"
                        />
                      )}
                    </Box>
                  </Tooltip>
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
                <Add color="icon-brand-medium" />
                <Text variant="bes-semibold" color="text-brand-medium">
                  {showAll ? 'Show Less' : 'Show More'}
                </Text>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default TxTravels;

const DetailRow = ({ label, children }) => (
  <Box display="flex" width="-webkit-fill-available">
    <Box
      css={css`
        flex: 1;
      `}
    >
      <Text variant="bs-semibold" color="text-secondary">
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
