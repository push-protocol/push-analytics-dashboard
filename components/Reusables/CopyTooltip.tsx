import React, { FC } from 'react';
import { Box, CopyFilled, TickCircleFilled, Tooltip } from '../../blocks';

type CopyToolTipProps = {
  tooltipText: string;
  copyFunc: () => void;
};
const CopyTooltip: FC<CopyToolTipProps> = ({ tooltipText, copyFunc }) => {
  return (
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
            onClick={copyFunc}
            autoSize
            size={16}
            color="icon-tertiary"
          />
        )}
      </Box>
    </Tooltip>
  );
};

export { CopyTooltip };
