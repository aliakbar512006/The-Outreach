import React, { Dispatch, SetStateAction } from "react";

import TestEmailBar from "./TestEmailBar";
import Tracking from "./Tracking";
import Action from "./Actions";
import AutoFollowUp from "./AutoFollowUp";
import Schedule from "./Schedule";

import styled from "styled-components";

import { BolderText } from "../styles/TextVariants.styled";
import { Button } from "../styles/ButtonVariants.styled";

type ModalProps = {
   children?: string;
   modalState: boolean;
   setModalState: Dispatch<SetStateAction<boolean>>;
};

const Modal = ({ children, modalState, setModalState }: ModalProps): JSX.Element => {
   const onClose = (e: React.MouseEvent): void => setModalState(false);

   if (!modalState) return <></>;
   return (
      <>
         <ModalContainer>
            <Header>
               <BolderText>The Outreach</BolderText>
            </Header>
            <Content>
               <TestEmailBar />
               <>
                  <SettingsBoxContent>
                     <Tracking />
                     <Action />
                     <AutoFollowUp />
                     <Schedule />
                  </SettingsBoxContent>
               </>
            </Content>
            <CloseAction>
               <Button onClick={(e) => onClose(e)}>Close</Button>
            </CloseAction>
         </ModalContainer>
      </>
   );
};

export default Modal;

const ModalContainer = styled.div`
   width: 550px;
   overflow-y: auto; // for scroll bars
   max-height: 95vh;
   background: white;
   border: 1.5px solid ${({ theme }) => theme.colors.borderColor};
   border-radius: 45px 45px 45px 0px;
   transition: 1.1s ease-out;
   box-shadow: -2rem 2rem 2rem rgba(black, 0.2);
   filter: blur(0);
   transform: scale(1);
   opacity: 1;
   visibility: visible;

   @supports (offset-rotate: 0deg) {
      offset-rotate: 0deg;
      &.off {
         offset-distance: 100%;
      }
   }
   @media (prefers-reduced-motion) {
      offset-path: none;
   }

   @media (max-width: 570px) {
      max-width: 98%;
   }
`;

const Header = styled.div`
   margin: 30px 0 10px 0;
   text-align: center;
   font-size: 30px;
`;

const Content = styled.div`
   padding: 1rem 2rem;
   overflow-y: auto;
`;

const SettingsBoxContent = styled.div`
   margin-top: 20px;
   & > div {
      border: 1.5px solid ${({ theme }) => theme.colors.borderColor};
      border-radius: 45px;
      margin: 15px 0px;
      padding: 10px;
   }
`;

const CloseAction = styled.div`
   border-top: 1px solid ${({ theme }) => theme.colors.borderColor};
   padding: 0.5rem 2rem;
`;
