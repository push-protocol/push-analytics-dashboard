import { FC } from 'react';
import { IconWrapper } from '../IconWrapper';
import { IconProps } from '../Icons.types';

const CopyFilled: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="CopyFilled"
      icon={
        <svg
          width="inherit"
          height="inherit"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <rect
            x="3"
            y="6.16663"
            width="7.33333"
            height="7.33337"
            rx="0.7"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.3665 2.5C6.9799 2.5 6.6665 2.8134 6.6665 3.2V4.90652H10.5741C11.1263 4.90652 11.5741 5.35424 11.5741 5.90652V9.83337H13.2998C13.6864 9.83337 13.9998 9.51997 13.9998 9.13337V3.2C13.9998 2.8134 13.6864 2.5 13.2998 2.5H7.3665Z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default CopyFilled;
