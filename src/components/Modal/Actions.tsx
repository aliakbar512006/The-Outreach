import { useState } from "react";

import styled from "styled-components";

import { BoldText, LightText } from "../styles/TextVariants.styled";
import { Label } from "../styles/LabelVariants.styled";
import { RadioInput } from "../styles/Radio.styled";
import { SectionHeadingContainer } from "../styles/SectionHeadingContainer.styled";

import actionImage from "../../assets/images/action.png";

const Action = (): JSX.Element => {
   return (
      <div>
         <SectionHeadingContainer>
            <img src={actionImage} alt="action img" />
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
   const [mailType, setMailType] = useState<string>("send");

   console.log(mailType);

   return (
      <>
         <Label>
            <RadioInput type="radio" name="radio" defaultChecked={value === "send"} value={value} onChange={(e) => setMailType(value)} />
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
