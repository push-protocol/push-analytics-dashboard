// React, NextJS imports
import React from 'react';

// Internal Components imports
import { Box, Text, CaretDown, CaretUp } from '../../blocks';

interface IProps {
  showConsensusInfo: boolean;
  toggleConsensusInfo: (value: boolean) => void;
}

const Advanced = ({ showConsensusInfo, toggleConsensusInfo }: IProps) => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      gap="spacing-xxs"
    >
      <Text variant="h6-semibold" color="text-primary">
        Advanced
      </Text>
      <Box
        cursor="pointer"
        onClick={() => toggleConsensusInfo(!showConsensusInfo)}
      >
        {!showConsensusInfo ? (
          <CaretDown color="icon-primary" size={14} />
        ) : (
          <CaretUp color="icon-primary" size={14} />
        )}
      </Box>
    </Box>
  );
};

export default Advanced;
