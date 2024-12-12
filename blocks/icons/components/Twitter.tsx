import { FC } from 'react';
import { IconWrapper } from '../IconWrapper';
import { IconProps } from '../Icons.types';

const Twitter: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="Twitter"
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="inherit"
          height="inherit"
          viewBox="0 0 18 18"
          fill="none"
          {...props}
        >
          <path
            d="M10.4821 7.62177L17.0389 0H15.4852L9.79188 6.61788L5.24467 0H0L6.87627 10.0074L0 18H1.55384L7.5661 11.0113L12.3683 18H17.613L10.4817 7.62177H10.4821ZM8.3539 10.0956L7.65719 9.09906L2.11372 1.16971H4.50033L8.97398 7.56895L9.67069 8.56546L15.4859 16.8835H13.0993L8.3539 10.096V10.0956Z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default Twitter;
