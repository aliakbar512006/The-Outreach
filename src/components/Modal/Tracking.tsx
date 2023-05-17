import { useState, Dispatch, SetStateAction, useEffect } from "react";

import styled from "styled-components";

import { Label } from "../styles/LabelVariants.styled";
import { CheckboxInput } from "../styles/Checkbox.styled";
import { BoldText, LightText } from "../styles/TextVariants.styled";
import { SectionHeadingContainer } from "../styles/SectionHeadingContainer.styled";
import { useAuth } from "../../context/authcontext";

// import trackingImage from "../../assets/images/tracking.png";

const Tracking = (): JSX.Element => {
   const [isOpenChecked, setIsOpenChecked] = useState<boolean>(true);
   const [isClicksChecked, setIsClicksChecked] = useState<boolean>(true);

   const {formData, setFormData} = useAuth();

   const handleTracking = () => {
      setFormData({...formData, tracking: {
         ...formData.tracking, isOpened: isOpenChecked, isClicked: isClicksChecked
      }})
   }

  useEffect(() => {
    handleTracking();
   }, [isOpenChecked, isClicksChecked]);

   return (
      <div>
         <SectionHeadingContainer>
            <span></span>
            <BoldText>Tracking</BoldText>
            <span></span>
         </SectionHeadingContainer>
         <TrackingContainer>
            <Checkbox label="Opens" checked={isOpenChecked} setIsChecked={setIsOpenChecked}  />
            <Checkbox label="Clicks" checked={isClicksChecked} setIsChecked={setIsClicksChecked}  />
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
      <>
         <Label>
            <CheckboxInput type="checkbox" checked={checked} onChange={() => setIsChecked((prev: boolean) => !prev)} />
            <span className="checkmark"></span>
            <LightText>{label}</LightText>
         </Label>
      </>
   );
};

export default Tracking;

const TrackingContainer = styled.div`
   padding: 10px 0px;
   display: flex;
   justify-content: center;
   column-gap: 20px;
`;
