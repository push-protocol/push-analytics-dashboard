// React, NextJS imports
import React from 'react';

// Internal Components imports
import { Box, Text } from '../../blocks';
import BlocksListView from '../../components/Blocks/ListView';

const Blocks = () => {
  return (
    <Box width="100%" display="flex" flexDirection="column" gap="spacing-md">
      <Text variant="h3-semibold" color="text-primary">
        Blocks
      </Text>
      <BlocksListView />
    </Box>
  );
};

export default Blocks;
