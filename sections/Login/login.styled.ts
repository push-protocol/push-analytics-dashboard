// External Library imports
import styled from 'styled-components';

// Internal Components imports
import { ItemHV2 } from '../../components/Reusables/SharedStyling';

export const Input = styled.input`
  outline: none;
  border: none;
  width: 85%;
  font-size: 18px;
  font-family: var(--font-family);
  padding: 15px 10px;
  margin: 5px 0px;
  background-color: ${(props) => props.theme.background.secondary};
  color: ${(props) => props.theme.text.primary};
`;

export const InputContainer = styled(ItemHV2)`
  border: 1px solid ${(props) => props.theme.background.border};
  justify-content: space-between;
  border-radius: 10px;
  width: 250px;
  padding: 0px 5px;
  margin-bottom: 15px;
`;
