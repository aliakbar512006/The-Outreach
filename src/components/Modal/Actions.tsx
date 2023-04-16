import { useContext } from "react";

import { CampaignContextType } from "../../@types/campaign";

import { CampaignContext } from "../../context/campaignContext";

import styled from "styled-components";

import { BoldText, LightText } from "../styles/TextVariants.styled";
import { Label } from "../styles/LabelVariants.styled";
import { RadioInput } from "../styles/Radio.styled";
import { SectionHeadingContainer } from "../styles/SectionHeadingContainer.styled";

const Action = (): JSX.Element => {
   return (
      <div>
         <SectionHeadingContainer>
            <span></span>
            <BoldText>Action</BoldText>
            <span></span>
         </SectionHeadingContainer>
         <ActionContainer>
            <Radio label="Send Email" value="send" />
            <Radio label="Create Drafts" value="draft" />
         </ActionContainer>
      </div>
   );
};

type RadioProps = {
   label: string;
   value: string;
};

const Radio = ({ label, value }: RadioProps) => {
   const { campaign, updateCampaign } = useContext(CampaignContext) as CampaignContextType;

   return (
      <>
         <Label>
            <RadioInput
               type="radio"
               name="radio"
               defaultChecked={value === "send"}
               value={value}
               onChange={() => updateCampaign({ ...campaign, actionType: { mailType: value } })}
            />
            <LightText>{label}</LightText>
         </Label>
      </>
   );
};

export default Action;

const ActionContainer = styled.div`
   padding: 10px 0px;
   display: flex;
   column-gap: 20px;
   justify-content: center;
`;
