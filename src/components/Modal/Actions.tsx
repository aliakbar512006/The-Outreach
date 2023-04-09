import { useState, ChangeEvent } from "react";

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
         </SectionHeadingContainer>
         <ActionContainer>
            <Radio label="Send Email" value="send" checked={true} />
            <Radio label="Create Drafts" value="draft" />
         </ActionContainer>
      </div>
   );
};

type RadioProps = {
   label: string;
   value: string;
   checked?: boolean;
};

const Radio = ({ label, value, checked }: RadioProps) => {
   const [_, setMailType] = useState<string>("send");

   const handleMailType = (e: ChangeEvent<HTMLInputElement>): void => setMailType(e.target.value);
   return (
      <>
         <Label>
            <RadioInput type="radio" name="radio" value={value} checked={checked} onChange={(e) => handleMailType(e)} />
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
   justify-content: flex-start;
`;
