// External Library imports
import styled from 'styled-components';

// Internal Components
import {
  TimeFilterType,
  OptionListType,
  SelectType,
} from '../../../types/otherStyled';

export const Select = styled.div<SelectType>`
  position: relative;
  height: 48px;
  width: 237px;
  background-color: ${(props) => props?.background || '#cf1c84'};
  border: ${(props) => props.border || 'none'};
  border-radius: 33px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => `0px 21px 0px ${props.paddingLeft}`};
  color: ${(props) => props?.color || '#fff'};
  font-size: 15px;
  font-weight: 400;
  margin-right: ${(props) => props?.marginRight || '10px'};
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 480px) {
    margin-bottom: 5px;
    width: ${(props) => props.width || '235px'};
  }
`;

export const OptionList = styled.div<OptionListType>`
  position: absolute;
  top: 50px;
  left: 0px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.background.optionlist};
  border: 1px solid ${({ theme }) => theme.background.border};
  width: 261px;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  z-index: 5;
  padding: 16px;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 480px) {
    left: ${(props) => props.left || 'auto'};
    right: 0px;
  }
`;

export const Option = styled.div`
  width: 100%;
  background-color: transparent;
  color: ${({ theme }) => theme.text.secondary};
  font-family: 'var(--font-family)';
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 8px;
  &:hover {
    background-color: ${({ theme }) => theme.background.timeFilter};
    border-radius: 12px;
  }
  @media (max-width: 480px) {
    width: inherit;
  }
`;

export const TimeFilterContainer = styled.div`
  display: flex;
  height: 42px;
  background-color: ${({ theme }) => theme.background.secondary};
  border-radius: 16px;
  padding: 5px;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
  @media (max-width: 480px) {
    width: 100%;
    margin-top: 0px;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 0px;
  }
`;

export const TimeFilter = styled.button<TimeFilterType>`
  border: none;
  background-color: ${(props) => props.background || '#cf1c84'};
  color: ${(props) => props.color || '#657795'};
  font-weight: ${(props) => props.fontWeight || '500'};
  font-family: 'FK Grotesk Neu';
  font-size: 15px;
  border-radius: 12px;
  min-width: 41px;
  height: 32px;
  padding: 5px;
  display: flex;
  flex: 1 1 0;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
