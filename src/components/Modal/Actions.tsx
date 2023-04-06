import { useState, ChangeEvent } from "react";

import { BoldText, LightText } from "../styles/TextVariants.styled";
import styled from "styled-components";
import { Label } from "../styles/LabelVariants.styled";
const Action = (): JSX.Element => {
   return (
      <div>
         <BoldText>Action</BoldText>
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
      <RadioButtonsContainer>
         <Label>
            <input type="radio" name="radio" value={value} checked={checked} onChange={(e) => handleMailType(e)} />
            <LightText>{label}</LightText>
         </Label>
      </RadioButtonsContainer>
   );
};

export default Action;

const ActionContainer = styled.div`
   padding: 10px;
   display: flex;
   column-gap: 20px;
   justify-content: flex-start;
`;

const RadioButtonsContainer = styled.div`
   input[type="radio"] {
      width: 20px;
      height: 19px;
      accent-color: ${({ theme }) => theme.colors.primaryColor};
      margin-right: 5px;
   }
`;
