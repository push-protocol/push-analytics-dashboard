// External Library imports
import styled from 'styled-components';

// Internal Components imports
import { ItemHV2 } from '../../components/Reusables/SharedStyling';

// export const FooterContainer = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin: 0;
//   @media (max-width: 480px) {
//     padding: 47px 24px 35px;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     width: 100%;
//     gap: 30px;
//   }
//   @media (min-width: 768px) {
//     padding: 47px 24px 35px;
//   }
//   @media (min-width: 1024px) {
//     padding: 47px 70px 35px;
//   }
// `;

export const LinkContainer = styled(ItemHV2)`
  justify-content: flex-start;
  gap: 17px;
  @media (max-width: 480px) {
    width: 100%;
    justify-content: center;
  }
`;

export const LeftContainer = styled(ItemHV2)`
  gap: 37px;
  justify-content: flex-start;
  @media (max-width: 480px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
`;

export const RightContainer = styled(ItemHV2)`
  gap: 17px;
  justify-content: flex-end;
  cursor: 'pointer';
  @media (max-width: 480px) {
    width: 100%;
    justify-content: center;
  }
`;
