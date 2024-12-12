import React, { FC } from 'react';
import { IllustrationWrapper } from '../IllustrationWrapper';
import { IllustrationProps } from '../Illustrations.types';

const PushLogo: FC<IllustrationProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IllustrationWrapper
      componentName="PushDev"
      illustration={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={restProps.width ?? '48'}
          height={restProps.height ?? '48'}
          viewBox="0 0 43 43"
          fill="none"
          {...props}
        >
          <path
            d="M21.4949 36.8803C23.2605 36.8803 24.7758 35.8225 25.4492 34.3071C25.6126 33.9382 25.34 33.5228 24.9366 33.5228H18.0541C17.6507 33.5228 17.3764 33.9373 17.5415 34.3071C18.2149 35.8225 19.7302 36.8803 21.4958 36.8803"
            fill="url(#paint0_linear_8751_28323)"
          />
          <path
            d="M32.055 29.3561C30.9352 29.3561 30.0279 28.4488 30.0279 27.3291V19.9658C30.0279 15.9754 27.2888 12.6257 23.5891 11.6908C23.4532 10.6391 22.5563 9.82465 21.4667 9.82465C20.377 9.82465 19.4732 10.6459 19.3433 11.7037C16.0229 12.5655 13.4893 15.3759 13.0335 18.8417C13.0266 18.8925 13.0197 18.9424 13.0137 18.994C13.0051 19.0628 12.9982 19.1307 12.9931 19.2004C12.9879 19.27 12.9819 19.3388 12.9776 19.4076C12.9733 19.4661 12.969 19.522 12.9664 19.5805C12.9613 19.6966 12.9578 19.8144 12.9578 19.9331V27.3282C12.9578 28.4428 12.0591 29.3466 10.9463 29.3552C10.4157 29.3595 9.97705 29.7689 9.97705 30.3012V30.3098C9.97705 30.8362 10.4045 31.2636 10.9308 31.2636H32.0507C32.577 31.2636 33.0044 30.8362 33.0044 30.3098C33.007 29.7844 32.5796 29.357 32.0532 29.357L32.055 29.3561Z"
            fill="url(#paint1_linear_8751_28323)"
          />
          <path
            d="M27.6095 10.2383C29.9848 10.7474 31.7985 12.7917 32.0221 15.2117C32.0471 15.48 32.281 15.6804 32.5545 15.6537C32.6843 15.6417 32.8022 15.5789 32.8864 15.4792C32.969 15.3785 33.0094 15.2513 32.9974 15.1214C32.8658 13.7084 32.2965 12.4021 31.3496 11.34C30.4096 10.2882 29.1876 9.57612 27.8142 9.28114C27.7798 9.27426 27.7454 9.26996 27.7118 9.26996C27.4865 9.26996 27.2818 9.42734 27.2337 9.65696C27.1769 9.92098 27.3455 10.1807 27.6095 10.2375V10.2383Z"
            fill="url(#paint2_linear_8751_28323)"
          />
          <path
            d="M28.1581 7.08897C31.8535 7.88103 34.6778 11.0639 35.0269 14.8272C35.0519 15.0956 35.2858 15.2942 35.5593 15.2693C35.6891 15.2572 35.807 15.1945 35.8912 15.0947C35.9738 14.9941 36.0142 14.8668 36.0022 14.7369C35.8104 12.6566 34.9693 10.7293 33.5727 9.16673C32.1872 7.61529 30.3855 6.56609 28.3645 6.13179C28.3301 6.12491 28.2957 6.12061 28.2622 6.12061C28.0369 6.12061 27.8322 6.27799 27.784 6.50761C27.7255 6.77163 27.895 7.03135 28.159 7.08811L28.1581 7.08897Z"
            fill="url(#paint3_linear_8751_28323)"
          />
          <path
            d="M15.3783 10.2383C15.6423 10.1815 15.8109 9.92006 15.7541 9.65604C15.7042 9.42642 15.5013 9.26904 15.276 9.26904C15.2424 9.26904 15.208 9.27334 15.1736 9.28022C13.8011 9.57434 12.579 10.2864 11.6382 11.3391C10.6913 12.3994 10.1203 13.7075 9.9904 15.1205C9.97836 15.2503 10.0179 15.3776 10.1013 15.4782C10.1848 15.5789 10.3034 15.6416 10.4333 15.6528C10.7085 15.6778 10.9407 15.4782 10.9656 15.2108C11.1892 12.7942 13.0047 10.7491 15.3783 10.2391V10.2383Z"
            fill="url(#paint4_linear_8751_28323)"
          />
          <path
            d="M14.8288 7.08897C15.0929 7.03221 15.2614 6.77077 15.2047 6.50675C15.1548 6.27713 14.9518 6.11975 14.7265 6.11975C14.6921 6.11975 14.6586 6.12405 14.6242 6.13093C12.6014 6.56523 10.8015 7.61443 9.41599 9.16587C8.01935 10.7294 7.17999 12.6558 6.98649 14.7361C6.97445 14.866 7.01401 14.9932 7.09743 15.0939C7.17999 15.1945 7.29953 15.2573 7.42939 15.2684C7.70287 15.2934 7.93679 15.0939 7.96173 14.8264C8.31003 11.0648 11.1343 7.88361 14.8288 7.08983V7.08897Z"
            fill="url(#paint5_linear_8751_28323)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_8751_28323"
              x1="26.1209"
              y1="26.2412"
              x2="20.487"
              y2="35.8182"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FF94A6" />
              <stop offset="0.17" stop-color="#EA6AC0" />
              <stop offset="0.33" stop-color="#DA4AD5" />
              <stop offset="0.42" stop-color="#D53EDD" />
              <stop offset="0.53" stop-color="#CB3EDD" />
              <stop offset="0.72" stop-color="#B341E0" />
              <stop offset="0.95" stop-color="#8B45E4" />
              <stop offset="1" stop-color="#8247E5" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_8751_28323"
              x1="32.2132"
              y1="12.243"
              x2="15.3013"
              y2="33.4359"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FF94A6" />
              <stop offset="0.17" stop-color="#EA6AC0" />
              <stop offset="0.33" stop-color="#DA4AD5" />
              <stop offset="0.42" stop-color="#D53EDD" />
              <stop offset="0.53" stop-color="#CB3EDD" />
              <stop offset="0.72" stop-color="#B341E0" />
              <stop offset="0.95" stop-color="#8B45E4" />
              <stop offset="1" stop-color="#8247E5" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_8751_28323"
              x1="38.3904"
              y1="6.96774"
              x2="9.534"
              y2="26.1217"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FF94A6" />
              <stop offset="0.17" stop-color="#EA6AC0" />
              <stop offset="0.33" stop-color="#DA4AD5" />
              <stop offset="0.42" stop-color="#D53EDD" />
              <stop offset="0.53" stop-color="#CB3EDD" />
              <stop offset="0.72" stop-color="#B341E0" />
              <stop offset="0.95" stop-color="#8B45E4" />
              <stop offset="1" stop-color="#8247E5" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_8751_28323"
              x1="38.1204"
              y1="6.56006"
              x2="9.26391"
              y2="25.714"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FF94A6" />
              <stop offset="0.17" stop-color="#EA6AC0" />
              <stop offset="0.33" stop-color="#DA4AD5" />
              <stop offset="0.42" stop-color="#D53EDD" />
              <stop offset="0.53" stop-color="#CB3EDD" />
              <stop offset="0.72" stop-color="#B341E0" />
              <stop offset="0.95" stop-color="#8B45E4" />
              <stop offset="1" stop-color="#8247E5" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_8751_28323"
              x1="33.0014"
              y1="-1.15072"
              x2="4.14498"
              y2="18.0049"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FF94A6" />
              <stop offset="0.17" stop-color="#EA6AC0" />
              <stop offset="0.33" stop-color="#DA4AD5" />
              <stop offset="0.42" stop-color="#D53EDD" />
              <stop offset="0.53" stop-color="#CB3EDD" />
              <stop offset="0.72" stop-color="#B341E0" />
              <stop offset="0.95" stop-color="#8B45E4" />
              <stop offset="1" stop-color="#8247E5" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_8751_28323"
              x1="31.5842"
              y1="-3.28521"
              x2="2.74068"
              y2="15.861"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FF94A6" />
              <stop offset="0.17" stop-color="#EA6AC0" />
              <stop offset="0.33" stop-color="#DA4AD5" />
              <stop offset="0.42" stop-color="#D53EDD" />
              <stop offset="0.53" stop-color="#CB3EDD" />
              <stop offset="0.72" stop-color="#B341E0" />
              <stop offset="0.95" stop-color="#8B45E4" />
              <stop offset="1" stop-color="#8247E5" />
            </linearGradient>
          </defs>
        </svg>
      }
      {...restProps}
    />
  );
};

export default PushLogo;
