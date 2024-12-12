import { FC } from 'react';
import { IconWrapper } from '../IconWrapper';
import { IconProps } from '../Icons.types';

const Telegram: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="Telegram"
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="inherit"
          height="inherit"
          viewBox="0 0 20 20"
          fill="none"
          {...props}
        >
          <g clip-path="url(#clip0_8751_28607)">
            <path
              d="M7.84765 12.6508L7.51682 17.3042C7.99015 17.3042 8.19515 17.1008 8.44098 16.8567L10.6601 14.7358L15.2585 18.1033C16.1018 18.5733 16.696 18.3258 16.9235 17.3275L19.9418 3.18417L19.9426 3.18334C20.2101 1.93667 19.4918 1.44917 18.6701 1.75501L0.928482 8.54751C-0.282352 9.01751 -0.264018 9.69251 0.722648 9.99834L5.25848 11.4092L15.7943 4.81667C16.2901 4.48834 16.741 4.67001 16.3701 4.99834L7.84765 12.6508Z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="clip0_8751_28607">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  );
};

export default Telegram;
