import React, { Dispatch, SetStateAction } from "react";

import TestEmailBar from "./TestEmailBar";
import Tracking from "./Tracking";
import Action from "./Actions";
import AutoFollowUp from "./AutoFollowUp";
import Schedule from "./Schedule";

import styled from "styled-components";
import { BoldText } from "../styles/TextVariants.styled";
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
            <Header />
            <Content>
               <TestEmailBar />
               <>
                  <BoldText> Settings: </BoldText>
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
   width: 500px;
   max-height: 95vh;
   overflow-y: auto; // for scroll bars
   background: white;
   border: 1px solid #ccc;
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
`;

const Header = styled.div`
   background-color: #2a168d;
   height: 70px;
   width: 100%;
`;

const Content = styled.div`
   padding: 1rem;
`;

const SettingsBoxContent = styled.div`
   margin-top: 20px;
   & > div {
      border: 1px solid rgb(170, 165, 165);
      border-radius: 4px;
      margin: 5px 0px;
      padding: 10px;
      background-color: #f6f6f6;
   }
`;

const CloseAction = styled.div`
   border-top: 1px solid #ccc;
   background: #eee;
   padding: 0.5rem 1rem;
`;
