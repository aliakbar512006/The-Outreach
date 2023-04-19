import { SetStateAction, useState, Dispatch, useContext } from "react";

import RecipientTags from "./RecipientTags";

import { CampaignContext } from "../../context/campaignContext";

import { CampaignContextType } from "../../@types/campaign";

import axios from "axios";

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
   const [currentRecepients, setCurrentRecepients] = useState<string[]>(["tyylermike@gmail.com"]);
   const { campaign } = useContext(CampaignContext) as CampaignContextType;

   const showModal = (e: React.MouseEvent): void => setRecipientModalState(true);

   const scheduleCampaignJob = () => {
      const recipients = inputType === "bulk" ? bulkRecipients.split("\n").slice(0, 10000) : currentRecepients; // only fetch 10000 recipients in bulk
      console.log("campaign:", campaign, "\n recipients", recipients);
      axios({
         method: "POST",
         url: "/emails",
         headers: {
            Authorization: "some_secret_token", // replace token with your actual token value
         },
         data: {
            campaign,
            recipients,
         },
      })
         .then((response) => {
            console.log(response);
         })
         .catch((error) => {
            console.log(error);
         });
   };

   return (
      <>
         <LightText>Send Emails</LightText>
         <TestEmailContainer>
            <RecipientTags
               currentRecepients={currentRecepients}
               setCurrentRecepients={setCurrentRecepients}
               bulkRecipients={bulkRecipients}
               inputType={inputType}
               setBulkRecipients={setBulkRecipients}
               showRecipientModal={showModal}
            />
            <TestEmailButton onClick={scheduleCampaignJob}> Send Test </TestEmailButton>
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
