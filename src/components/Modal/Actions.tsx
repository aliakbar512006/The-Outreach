import { useEffect, useState } from "react";

import styled from "styled-components";

import { BoldText, LightText } from "../styles/TextVariants.styled";
import { Label } from "../styles/LabelVariants.styled";
import { RadioInput } from "../styles/Radio.styled";
import { SectionHeadingContainer } from "../styles/SectionHeadingContainer.styled";
import { set } from "immer/dist/internal";
import  {useAuth} from "../../context/authcontext";

// import actionImage from "../../assets/images/action.png";

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
   const [mailType, setMailType] = useState<string>("");
   const {formData, setFormData} = useAuth();


   const handleMailType = (e:any) => {
      const {value} = e.target
      setFormData({...formData, action: value})
   }

  
   return (
      <>
         <Label>
            <RadioInput type="radio" name="radio"  value={value} onChange={(e) => handleMailType(e)} />
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
