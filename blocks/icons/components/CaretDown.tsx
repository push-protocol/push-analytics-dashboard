import { FC } from 'react';
import { IconWrapper } from '../IconWrapper';
import { IconProps } from '../Icons.types';

const CaretDown: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="CaretDown"
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
            d="M16.5 12.5C16.5 14.7091 14.7091 16.5 12.5 16.5H4.5C2.29086 16.5 0.500001 14.7091 0.500001 12.5V4.5C0.500001 2.29086 2.29086 0.500001 4.5 0.500001H12.5C14.7091 0.500001 16.5 2.29086 16.5 4.5V12.5Z"
            fill="var(--surface-tertiary)"
          />
          <path
            d="M12.2249 6.6075L8.4999 10.3325L4.7749 6.6075"
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

export default CaretDown;
