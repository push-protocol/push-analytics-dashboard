import styled from 'styled-components';
import EditIcon from '@mui/icons-material/Edit';
import { Dialog } from '@mui/material';
import { Container } from '@mui/system';
import { ItemHV2, ItemVV2, SpanV2 } from '../../theme/SharedStyling';

export const AdminContainer = styled(ItemVV2)`
  width: 100%;
  padding: 0px 50px;
  @media (min-width: 310px) {
    padding: 0px 24px;
  }
  @media (min-width: 768px) {
    padding: 0px 50px;
  }
`;

export const Input = styled.input`
  border: 1px solid ${(props) => props.theme.background.border};
  outline: none;
  border-radius: 10px;
  font-size: 18px;
  padding: 15px 10px;
  margin: 5px 0px;
  background-color: ${(props) => props.theme.background.secondary};
  color: ${(props) => props.theme.text.primary};
`;

export const InputContainer = styled(ItemVV2)`
  max-height: 450px;
  // width: 50%;
  overflow-y: auto;
`;

export const FormContainer = styled(ItemHV2)`
  width: 100%;
  margin: 10px 0px;
  border: 1px solid ${(props) => props.theme.background.border};
  padding: 10px;
  border-radius: 28px;
  @media (max-width: 900px) {
    flex-direction: column;
    height: max-content;
  }
`;

export const Button = styled.button`
  padding: ${(props) => props.padding || '8px 15px'};
  font-size: ${(props) => props.fontSize || '15px'};
  border: 1px solid ${(props) => props.theme.background.border};
  color: ${(props) => props.theme.text.primary};
  background-color: ${(props) =>
    props.background || props.theme.background.secondary};
  border-radius: 10px;
  cursor: pointer;
  margin: ${(props) => props.margin || '0px'};
  &:hover {
    background-color: ${(props) =>
      props.hoverColor || props.theme.background.border};
  }
`;

export const InfoContent = styled(SpanV2)`
  padding: 10px 0px;
  color: ${(props) => props.theme.text.primary};
`;

export const InfoHeader = styled(SpanV2)`
  padding: 10px 0px;
  font-size: 18px;
  font-weight: 500;
  color: ${(props) => props.theme.text.primary};
`;

export const InfoContainer = styled(ItemVV2)`
  align-items: flex-start;
  padding: 0px 0px 0px 40px;
  @media (max-width: 900px) {
    align-items: center;
    padding: 0px;
  }
`;

export const GraphContainer = styled.div``;
