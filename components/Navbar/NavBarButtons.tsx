// React, NextJS imports
import React from 'react';
import { useRouter } from 'next/router';

// External Library imports
import styled from 'styled-components';

// Internal Components imports
import { ROUTES } from '../../utils/constants';
import { ItemHV2, ButtonV2 } from '../../components/Reusables/SharedStyling';

export const NavBarButtons = ({ logout, isLoggedIn }) => {
  const router = useRouter();
  return (
    <ButtonContainer>
      <Button
        onClick={() => {
          router.push(ROUTES.DASHBOARD);
        }}
      >
        Dashboard
      </Button>
      <Button onClick={() => router.push(ROUTES.ADMIN)}>Admin Panel</Button>
      {isLoggedIn ? <Button onClick={() => logout()}>Logout</Button> : null}
    </ButtonContainer>
  );
};

const ButtonContainer = styled(ItemHV2)`
  justify-content: flex-end;
`;

const Button = styled(ButtonV2)`
  max-width: 140px;
  font-size: 18px;
  font-weight: 500;
  font-family: 'var(--font-family)';
  border-radius: 10px;
  padding: 10px 10px;
  type: submit;
  background: ${(props) => props.theme.background.default};
  border: 1px solid #df4fa3;
  color: ${(props) => props.theme.text.primary};
  margin-right: 10px;
`;
