// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useEffect, useState, FC, ReactNode } from 'react';
import styled from 'styled-components';
import { toast, Toaster } from 'sonner';
import { Cross, PushLogo } from '../../blocks';

type NotificationProps = {
  image?: ReactNode;
  /* Title of the notification */
  firstTitle?: string;
  /* Description of the notification */
  description?: ReactNode;
  /* Optional onClose action for the notification */
  onClose?: () => void;
  /* Custom React component to be passed as the image. */
  overlay?: ReactNode;
  /* Optional onClick event for the notification */
  onClick?: () => void;
  /* Position of the notification */
  position?: 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';
  /* Optional duration of the notification component */
  duration?: number;
};

// Custom Hook
export const useChainNotification = () => {
  const [hasMounted, setHasMounted] = useState(false);

  const showNotification = () => {
    const toastId = toast.custom(
      () => (
        <NotificationItem
          firstTitle="Vote for Devnet"
          description={
            <>
              Governance proposal is live! <br />
              Vote today to make Push Chain a reality
            </>
          }
          position="bottom-left"
          onClose={() => {
            localStorage.setItem('chainNotificationShown', 'true');
            toast.dismiss(toastId);
          }}
        />
      ),
      {
        duration: Infinity,
        position: 'bottom-left',
      }
    );
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const notificationAlreadyShown =
        localStorage.getItem('chainNotificationShown') === 'true';

      if (!notificationAlreadyShown && !hasMounted) {
        showNotification();
        setHasMounted(true);
      } else {
        toast.dismiss();
        setHasMounted(false);
      }
    }
  }, []);
};

const ChainSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="80"
    height="31"
    viewBox="0 0 80 31"
    fill="none"
  >
    <path
      d="M0.587891 8.323C0.587891 3.90472 4.16961 0.322998 8.58789 0.322998H71.4458C75.8641 0.322998 79.4458 3.90472 79.4458 8.323V22.2318C79.4458 26.65 75.8641 30.2318 71.4458 30.2318H8.5879C4.16962 30.2318 0.587891 26.65 0.587891 22.2318V8.323Z"
      fill="white"
    />
    <path
      d="M59.6436 23.3957V7.15894H65.628L69.8031 22.9318V7.15894H72.8185V23.3957H66.6949L62.659 7.73882V23.3957H59.6436Z"
      fill="black"
    />
    <path
      d="M53.8408 23.3957V20.4963L53.8408 10.0584V7.15894H56.9723V10.0584L56.9722 20.4963V23.3957H53.8408Z"
      fill="black"
    />
    <path
      d="M48.636 23.3957L47.6386 19.6612H41.2367L40.2393 23.3957H37.0615L41.4223 7.15894H47.4994L51.8138 23.3957H48.636ZM42.0485 16.6458H46.8268L44.4376 7.73882L42.0485 16.6458Z"
      fill="black"
    />
    <path
      d="M32.3094 23.3957V16.5763H25.6988V23.3957H22.5674V7.15894H25.6988V13.5609H32.3094V7.15894H35.4408V23.3957H32.3094Z"
      fill="black"
    />
    <path
      d="M14.0807 23.6045C9.99829 23.6045 7.21484 21.0994 7.21484 16.6691V13.8856C7.21484 9.4553 9.99829 6.9502 14.0807 6.9502C18.0935 6.9502 20.8305 9.22334 20.9465 13.1666H17.8151C17.7223 11.1022 16.4466 9.96559 14.0807 9.96559C11.6452 9.96559 10.3462 11.3109 10.3462 13.8856V16.6691C10.3462 19.2437 11.6452 20.705 14.0807 20.705C16.377 20.705 17.676 19.5453 17.8151 17.5737H20.9465C20.7609 21.4241 18.0239 23.6045 14.0807 23.6045Z"
      fill="black"
    />
  </svg>
);

export const Notification = () => {
  return <StyledToaster offset={13} visibleToasts={5} />;
};

// Notification Item Component
const NotificationItem: FC<NotificationProps> = ({
  firstTitle,
  description,
  onClick,
  onClose,
}) => {
  const handleNotificationClick = () => onClick?.();
  const handleNotificationClose = () => {
    onClose?.();
    toast.dismiss();
  };

  return (
    <NotificationContainer onClick={handleNotificationClick}>
      <CloseButton
        onClick={(e) => {
          e.stopPropagation();
          handleNotificationClose();
        }}
      >
        <Cross size={24} color="white-100" />
      </CloseButton>
      <TextContainer>
        <LogoContainer>
          <PushLogo width={50} height={53} />
          <ChainSvg />
        </LogoContainer>
        <NotificationTitle>{firstTitle}</NotificationTitle>
        <VoteButton
          onClick={() => {
            localStorage.setItem('chainNotificationShown', 'true');
            window.open(
              'https://gov.push.org/t/introducing-push-chain-a-shared-state-l1-for-universal-apps/1991',
              '_blank'
            );
            toast.dismiss();
          }}
        >
          Learn More
        </VoteButton>
        <NotificationDescription>{description}</NotificationDescription>
      </TextContainer>
    </NotificationContainer>
  );
};

// Notification Container
const NotificationContainer = styled.div`
  position: relative;
  border-radius: var(--radius-md, 24px);
  background: #000;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 310px;
  width: 320px;
  cursor: pointer;
  box-sizing: border-box;
  font-family: var(--font-family);
  overflow: hidden;

  @media (max-width: 425px) {
    width: 100%;
  }

  img {
    width: 72px;
    height: auto;
    margin: 0 auto;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledToaster = styled(Toaster)`
  width: 397px;

  @media (max-width: 425px) {
    width: 100%;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 24px;
  flex: 1;
  box-sizing: border-box;
  gap: 16px;
  align-items: center;
`;

const NotificationTitle = styled.span`
  color: #fff;
  text-align: center;
  font-family: var(--font-family);
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: 36px; /* 138.462% */
`;

const NotificationDescription = styled.span`
  color: #fff;
  text-align: center;
  font-family: var(--font-family);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: -0.32px;
  overflow: hidden;
`;

const VoteButton = styled.button`
  font-family: var(--font-family);
  background-color: transparent;
  cursor: pointer;
  color: #fff;
  margin: 0 auto;
  border: 1.5px solid #fff;
  padding: 16px 32px;
  border-radius: 16px;
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
`;

const CloseButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  color: #fff;
  padding: 0px;
  position: absolute;
  right: 14px;
  top: 10px;
  border: none;
`;
