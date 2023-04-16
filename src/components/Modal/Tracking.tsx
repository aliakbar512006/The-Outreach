import { useContext } from "react";

import { CampaignContextType, ICampaign } from "../../@types/campaign.d";

import { CampaignContext } from "../../context/campaignContext";

import styled from "styled-components";

import { Label } from "../styles/LabelVariants.styled";
import { CheckboxInput } from "../styles/Checkbox.styled";
import { BoldText, LightText } from "../styles/TextVariants.styled";
import { SectionHeadingContainer } from "../styles/SectionHeadingContainer.styled";

const Tracking = (): JSX.Element => {
   const { campaign, updateCampaign } = useContext(CampaignContext) as CampaignContextType;

   return (
      <div>
         <SectionHeadingContainer>
            <span></span>
            <BoldText>Tracking</BoldText>
            <span></span>
         </SectionHeadingContainer>
         <TrackingContainer>
            <Checkbox label="Open" checked={campaign.trackingType.isOpen} campaign={campaign} updateCampaign={updateCampaign} />
            <Checkbox label="Click" checked={campaign.trackingType.isClick} campaign={campaign} updateCampaign={updateCampaign} />
         </TrackingContainer>
      </div>
   );
};

type CheckboxProps = {
   label: string;
   checked: boolean;
   campaign: ICampaign;
   updateCampaign: (updateCampaign: ICampaign) => void;
};

const Checkbox = ({ label, checked, campaign, updateCampaign }: CheckboxProps) => {
   return (
      <>
         <Label>
            <CheckboxInput
               type="checkbox"
               checked={checked}
               onChange={() => updateCampaign({ ...campaign, trackingType: { ...campaign.trackingType, [`is${label}`]: !checked } })}
            />
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
