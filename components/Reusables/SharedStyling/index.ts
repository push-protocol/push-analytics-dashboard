// External Library imports
import styled from 'styled-components';

// Internal Configs
import {
  IButtonV2Props,
  IH2V2Props,
  IImageV2Props,
  IItemHV2Props,
  ISectionV2Props,
  ISpanV2Props,
  ISkeletonProps,
  ISkeletonLineProps,
} from '../../../types/sharedStyling';
import { TextType } from '../../../types/otherStyled';
import { themeLight } from '../../../theme/palette';

// Section covers the entire width and height
export const SectionV2 = styled.section<ISectionV2Props>`
  align-items: ${(props) => props.alignItems || 'center'};
  align-self: ${(props) => props.alignSelf || 'stretch'};
  background: ${(props) =>
    props.gradient
      ? props.gradient
      : props.background
      ? props.background
      : 'transparent' || 'transparent'};
  display: ${(props) => props.display || 'flex'};
  flex: ${(props) => props.flex || '1'};
  flex-direction: ${(props) => props.flexDirection || 'column'};
  justify-content: ${(props) => props.justifyContent || 'center'};
  margin: ${(props) => props.margin || '0px'};
  min-height: ${(props) => props.minHeight || 'auto'};
  overflow: ${(props) => props.overflow || 'initial'};
  padding: ${(props) => props.padding || '0px'};
  position: ${(props) => props.position || 'relative'};
`;

export const ItemBreakV2 = styled.div`
  flex-basis: 100%;
`;

export const ItemHV2 = styled.div<IItemHV2Props>`
  align-items: ${(props) => props.alignItems || 'center'};
  align-self: ${(props) => props.alignSelf || 'stretch'};
  background: ${(props) =>
    props.gradient
      ? props.gradient
      : props.background
      ? props.background
      : 'transparent' || 'transparent'};
  border: ${(props) => props.border || 'initial'};
  border-radius: ${(props) => props.borderRadius || 'initial'};
  bottom: ${(props) => props.bottom || 'auto'};
  box-shadow: ${(props) => props.boxShadow || 'initial'};
  display: ${(props) => props.display || 'flex'};
  filter: ${(props) => props.filter || 'initial'};
  flex: ${(props) => props.flex || '1'};
  flex-basis: ${(props) => props.flexBasis || 'auto'};
  flex-flow: ${(props) => props.flexFlow || 'initial'};
  flex-direction: ${(props) => props.flexDirection || 'row'};
  flex-wrap: ${(props) => props.flexWrap || 'wrap'};
  font-size: ${(props) => props.fontSize || 'initial'};
  height: ${(props) => props.height || 'auto'};
  min-height: ${(props) => props.minHeight || '0px'};
  justify-content: ${(props) => props.justifyContent || 'center'};
  left: ${(props) => props.left || 'auto'};
  margin: ${(props) => props.margin || '0px'};
  max-width: ${(props) => props.maxWidth || 'initial'};
  min-width: ${(props) => props.minWidth || 'auto'};
  overflow: ${(props) => props.overflow || 'initial'};
  overflow-wrap: ${(props) => props.overflowWrap || 'anywhere'};
  padding: ${(props) => props.padding || '0px'};
  position: ${(props) => props.position || 'relative'};
  right: ${(props) => props.right || 'auto'};
  text-align: ${(props) => props.textAlign || 'initial'};
  top: ${(props) => props.top || 'auto'};
  width: ${(props) => props.width || 'auto'};
  z-index: ${(props) => props.zIndex || 'auto'};
  gap: ${(props) => props.gap || '0px'};
  font-size: ${(props) => props.fontSize || '14px'};
  color: ${(props) => props.color || themeLight.text.primary};
  cursor: ${(props) => props.cursor || 'auto'};

  &:hover & {
    filter: ${(props) =>
      (props.filterHover
        ? props.filterHover
        : props.hover
        ? props.hover
        : 'none') || 'none'};
  }

  ${ItemBreakV2} {
    width: 0;
  }
`;

export const ItemVV2 = styled(ItemHV2)`
  flex: ${(props) => props.flex || '1'};
  flex-direction: ${(props) => props.flexDirection || 'column'};

  ${ItemBreakV2} {
    height: 0;
    width: auto;
  }
`;

export const H2V2 = styled.h2<IH2V2Props>`
  color: ${(props) => props.color || themeLight.text.primary};
  font-family: ${(props) => props.family || 'var(--font-family)'};
  font-size: ${(props) => props.fontSize || 'initial'};
  font-weight: ${(props) => props.fontWeight || 'initial'};
  letter-spacing: ${(props) => props.letterSpacing || 'initial'};
  margin: ${(props) => props.margin || '0px'};
  padding: ${(props) => props.padding || '0px'};
  text-align: ${(props) => props.textAlign || 'center'};
  text-transform: ${(props) => props.textTransform || 'inherit'};
`;

export const ButtonV2 = styled.button<IButtonV2Props>`
  align-items: ${(props) => props.alignItems || 'center'};
  align-self: ${(props) => props.alignSelf || 'auto'};
  background: ${(props) => props.background || 'tranparent'};
  border: ${(props) => props.border || 'initial'};
  border-radius: ${(props) => props.borderRadius || '0px'};
  color: ${(props) => props.color || themeLight.text.primary};
  cursor: ${(props) => props.cursor || 'pointer'};
  display: ${(props) => props.display || 'flex'};
  flex: ${(props) => props.flex || '1'};
  flex-direction: ${(props) => props.flexDirection || 'column'};
  font-size: ${(props) => props.fontSize || 'inherit'};
  font-weight: ${(props) => props.fontWeight || 'initial'};
  justify-content: ${(props) => props.justifyContent || 'center'};
  letter-spacing: ${(props) => props.letterSpacing || 'initial'};
  margin: ${(props) => props.margin || '0px'};
  max-width: ${(props) => props.maxWidth || 'initial'};
  min-width: ${(props) => props.minWidth || 'auto'};
  overflow: ${(props) => props.overflow || 'hidden'};
  padding: ${(props) => props.padding || '0px'};
  pointer: ${(props) => props.pointer || 'hand'};
  position: ${(props) => props.position || 'relative'};
  text-decoration: ${(props) => props.textDecoration || 'none'};
  text-transform: ${(props) => props.textTransform || 'initial'};
  z-index: ${(props) => props.zIndex || '3'};

  &:before {
    background: ${(props) =>
      props.hover || (props.background ? props.background : 'transparent')};
    bottom: 0;
    content: '';
    display: none;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
  }

  &:after {
    background: ${(props) => props.hoverBackground || '#000'};
    bottom: 0;
    content: '';
    left: 0;
    opacity: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
  }

  &:hover:before {
    display: block;
  }

  &:hover:after {
    opacity: 0.08;
  }
  &:active:after {
    opacity: 0.15;
  }

  & > div {
    display: flex;
  }
`;

export const SpanV2 = styled.span<ISpanV2Props>`
  align-self: ${(props) => props.alignSelf || 'auto'};
  background: ${(props) => props.background || 'transparent'};
  border-radius: ${(props) => props.borderRadius || 'initial'};
  bottom: ${(props) => props.bottom || 'auto'};
  color: ${(props) => props.color || 'inherit'};
  flex: ${(props) => props.flex || 'initial'};
  font-size: ${(props) => props.fontSize || 'inherit'};
  font-weight: ${(props) => props.fontWeight || '300'};
  left: ${(props) => props.left || 'auto'};
  letter-spacing: ${(props) => props.letterSpacing || 'inherit'};
  line-height: ${(props) => props.lineHeight || 'initial'};
  margin: ${(props) => props.margin || '0px'};
  padding: ${(props) => props.padding || '0px'};
  position: ${(props) => props.position || 'initial'};
  right: ${(props) => props.right || 'auto'};
  text-align: ${(props) => props.textAlign || 'center'};
  text-transform: ${(props) => props.textTransform || 'inherit'};
  top: ${(props) => props.top || 'auto'};
  z-index: ${(props) => props.zIndex || 'auto'};
  max-width: ${(props) => props.maxWidth || 'initial'};
`;

export const ImageV2 = styled.img<IImageV2Props>`
  display: ${(props) => props.display || 'flex'};
  height: ${(props) => props.height || 'auto'};
  max-height: ${(props) => props.maxHeight || 'initial'};
  padding: ${(props) => props.padding || '0px'};
  width: ${(props) => props.width || '100%'};
  margin: ${(props) => props.margin || '0px'};
  margin-right: ${(props) => props.marginRight || '0px'};
  vertical-align: ${(props) => props.verticalAlign || 'auto'};
  border-radius: ${(props) => props.borderRadius || 'initial'};
  overflow: ${(props) => props.overflow || 'initial'};
  cursor: ${(props) => props.cursor || 'default'};
  filter: ${(props) => props.filter || 'none'};
  alt: ${(props) => props.alt || 'Image'};
`;

export const AInlineV2 = styled.a`
  background: transparent;
  color: #e1087f;
  display: inline;
  letter-spacing: inherit;
  padding: 0px;
  text-transform: initial;
`;

export const DashBoardContainer = styled(ItemVV2)`
  width: 100%;
  height: auto;
  justify-content: flex-start;

  @media (min-width: 310px) {
    padding: 0px 24px !important;
  }
  @media (min-width: 1024px) {
    padding: 0px 70px !important;
  }
`;

export const Text = styled.p<TextType>`
  font-size: ${(props) => props.size || '15px'};
  font-weight: ${(props) => props.weight || 400};
  font-family: var(--font-family);
  color: ${(props) => props.color || props.theme.text.primary};
  margin-top: ${(props) => props.marginTop || '0px'};
  margin-bottom: ${(props) => props.marginBottom || '0px'};
  margin-left: ${(props) => props.marginLeft || '0px'};
`;

export const HorizontalLine = styled.div(
  ({ theme }) => `
  display: none;
  height: 0px;
  border: 0.5px solid ${theme.background.timeFilter};
  width: 100%;
  margin: 0 auto;
  @media (max-width: 480px) {
    display: block;
  }
`
);

export const Skeleton = styled.div<ISkeletonProps>`
  padding: ${(props) => props.padding || '0px'};
  max-width: ${(props) => props.maxWidth || 'initial'};
  width: ${(props) => props.width || 'initial'};
  background: ${(props) =>
    props.gradient
      ? props.gradient
      : props.background
      ? props.background
      : 'transparent' || 'transparent'};
  border-radius: ${(props) => props.borderRadius || 'initial'};
  display: ${(props) => props.display || 'flex'};
  flex-direction: ${(props) => props.flexDirection || 'column'};
  justify-content: ${(props) => props.justifyContent || 'center'};
  align-items: ${(props) => props.alignItems || 'center'};
  margin: ${(props) => props.margin || '0px'};
  gap: ${(props) => props.gap || '0px'};
`;

export const SkeletonLine = styled.div<ISkeletonLineProps>`
height: ${(props) => props.height || 'auto'};
width: ${(props) => props.width || 'initial'};
margin: ${(props) => props.margin || '0px'};
padding:${(props) => props.padding || '0px'};
border-radius: ${(props) => props.borderRadius || '16px'};
background: ${(props) =>
  props.gradient
    ? props.gradient
    : props.background
    ? props.background
    : 'linear-gradient(to right, rgba(130, 130, 130, 0.2) 8%, rgba(130, 130, 130, 0.3) 18%, rgba(130, 130, 130, 0.2) 33%)' ||
      'linear-gradient(to right, rgba(130, 130, 130, 0.2) 8%, rgba(130, 130, 130, 0.3) 18%, rgba(130, 130, 130, 0.2) 33%)'};
background-size: ${(props) => props.backgroundSize || '800px 100px'};
animation: wave-lines 1.5s infinite ease-out;

@keyframes wave-lines {
    0% {
        background-position: -468px 0;
    }
    100% {
        background-position: 468px 0;
    }
`;
