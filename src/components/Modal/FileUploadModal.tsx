import React, { useState, Dispatch, SetStateAction, MouseEvent } from "react";

import styled from "styled-components";

import { BolderText, LightText } from "../styles/TextVariants.styled";
import { Button } from "../styles/ButtonVariants.styled";

type ModalProps = {
   modalState: boolean;
   setModalState: Dispatch<SetStateAction<boolean>>;
   setBulkRecipients: Dispatch<SetStateAction<string>>;
   seRecipientsInputType: Dispatch<SetStateAction<string>>;
};

const FileUploadModal = ({ modalState, setModalState, setBulkRecipients, seRecipientsInputType }: ModalProps): JSX.Element => {
   const onClose = (e: MouseEvent): void => setModalState(false);

   const [recipients, setRecipients] = useState<string>("");

   const importEmails = (e: MouseEvent) => {
      seRecipientsInputType("bulk");
      setBulkRecipients(recipients);
      onClose(e);
   };

   if (!modalState) return <></>;
   return (
      <>
         <ModalContainer>
            <Header>
               <BolderText>Bulk import the recipients</BolderText>
               <CloseModal onClick={(e) => onClose(e)}>x</CloseModal>
            </Header>
            <Content>
               <LightText>Please enter line separated emails</LightText>
               <TextArea rows={17} cols={15} value={recipients} onChange={(e) => setRecipients(e.target.value)} />
               <Button onClick={(e) => importEmails(e)}>Import</Button>
            </Content>
         </ModalContainer>
      </>
   );
};

export default FileUploadModal;

const ModalContainer = styled.div`
   // position: absolute;
   // inset: 0;
   min-width: 650px;
   height: auto;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   border: 1.5px solid ${({ theme }) => theme.colors.borderColor};
   border-radius: 45px;
   transition: 1.1s ease-out;
   box-shadow: -2rem 2rem 2rem rgba(black, 0.2);
   filter: blur(0);
   transform: scale(1);
   opacity: 1;
   visibility: visible;
   background-color: white;

   @supports (offset-rotate: 0deg) {
      offset-rotate: 0deg;
      &.off {
         offset-distance: 100%;
      }
   }
   @media (prefers-reduced-motion) {
      offset-path: none;
   }

   @media (max-width: 670px) {
      max-width: 98%;
      min-width: 98%;
   }
`;

const Header = styled.div`
   width: 90%;
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin: 20px auto 10px auto;
   text-align: center;
   font-size: 30px;
`;

const Content = styled.div`
   padding: 1rem 2rem;
   overflow-y: auto;
`;

const TextArea = styled.textarea`
   width: 100%;
   display: flex;
   justify-content: center;
   margin: 10px auto;
   padding: 15px 20px;
   font-family: "Montserrat-Regular";
   font-size: 12.5px;
   resize: none;
   overflow-y: auto;
   border: 1.5px solid ${({ theme }) => theme.colors.borderColor};
`;

const CloseModal = styled.div`
   font-size: 20px;
   cursor: pointer;
`;
