import { useState, Dispatch, SetStateAction } from "react";
import { BoldText, LightText } from "../styles/TextVariants.styled";
import styled from "styled-components";
import { Label } from "../styles/LabelVariants.styled";

const Tracking = (): JSX.Element => {
   const [isOpenChecked, setIsOpenChecked] = useState<boolean>(true);
   const [isClicksChecked, setIsClicksChecked] = useState<boolean>(true);

   return (
      <div>
         <BoldText>Tracking</BoldText>
         <TrackingContainer>
            <Checkbox label="Opens" checked={isOpenChecked} setIsChecked={setIsOpenChecked} />
            <Checkbox label="Clicks" checked={isClicksChecked} setIsChecked={setIsClicksChecked} />
         </TrackingContainer>
      </div>
   );
};

type CheckboxProps = {
   label: string;
   checked: boolean;
   setIsChecked: Dispatch<SetStateAction<boolean>>;
};

const Checkbox = ({ label, checked, setIsChecked }: CheckboxProps) => {
   return (
      <CheckboxContainer>
         <Label>
            <input type="checkbox" checked={checked} onChange={() => setIsChecked((prev: boolean) => !prev)} />
            <span className="checkmark"></span>
            <LightText>{label}</LightText>
         </Label>
      </CheckboxContainer>
   );
};

export default Tracking;

const TrackingContainer = styled.div`
   padding: 10px;
   display: flex;
   column-gap: 20px;
   justify-content: flex-start;
`;

const CheckboxContainer = styled.div`
   input[type="checkbox"] {
      width: 1.3em;
      height: 1.3em;
      border: 1px solid rgb(118, 118, 118);
      border-radius: 1px;
      margin-right: 7px;
      outline: none;
      cursor: pointer;
      accent-color: ${({ theme }) => theme.colors.primaryColor};
   }
`;
