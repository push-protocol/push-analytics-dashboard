import { FC } from 'react';
import { IconWrapper } from '../IconWrapper';
import { IconProps } from '../Icons.types';

const CaretUp: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="CaretUp"
      icon={
        <svg
          width="inherit"
          height="inherit"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M0.5 4.5C0.5 2.29086 2.29086 0.5 4.5 0.5H12.5C14.7091 0.5 16.5 2.29086 16.5 4.5V12.5C16.5 14.7091 14.7091 16.5 12.5 16.5H4.5C2.29086 16.5 0.5 14.7091 0.5 12.5V4.5Z"
            fill="var(--surface-tertiary)"
          />
          <path
            d="M4.7751 10.3925L8.5001 6.6675L12.2251 10.3925"
            stroke="var(--icon-primary)"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default CaretUp;
