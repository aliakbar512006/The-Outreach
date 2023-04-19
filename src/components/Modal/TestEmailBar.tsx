import { SetStateAction, Dispatch } from "react";

import RecipientTags from "./RecipientTags";

import styled from "styled-components";

import { LightText } from "../styles/TextVariants.styled";
import { TestEmailButton } from "../styles/ButtonVariants.styled";

type TestEmailBarProps = {
   setRecipientModalState: Dispatch<SetStateAction<boolean>>;
   bulkRecipients: string;
   inputType: string;
   setBulkRecipients: Dispatch<SetStateAction<string>>;
};

const TestEmailBar = ({ setRecipientModalState, bulkRecipients, inputType, setBulkRecipients }: TestEmailBarProps): JSX.Element => {
   const showModal = (e: React.MouseEvent): void => setRecipientModalState(true);

   return (
      <>
         <LightText>Send Emails</LightText>
         <TestEmailContainer>
            <RecipientTags
               tags={["dev@gmail.com"]}
               bulkRecipients={bulkRecipients}
               inputType={inputType}
               setBulkRecipients={setBulkRecipients}
               showRecipientModal={showModal}
            />
            <TestEmailButton> Send Test </TestEmailButton>
         </TestEmailContainer>
      </>
   );
};

export default TestEmailBar;

const TestEmailContainer = styled.div`
   display: flex;
   column-gap: 5px;
   padding: 5px 0px;
   width: 100%;
   margin: 0 0 20px 0;
`;
