import { useContext } from "react";

import { CampaignContextType } from "../../@types/campaign";

import { CampaignContext } from "../../context/campaignContext";

import { LightText, BoldText } from "../styles/TextVariants.styled";
import { SpeedConfigContainer } from "../styles/ScheduleContainer.styled";
import { Dropdown } from "../styles/Dropdown.styled";
import { CheckboxInput } from "../styles/Checkbox.styled";
import { SpeedLabel } from "../styles/LabelVariants.styled";
import { SectionSubHeadingContainer } from "../styles/SectionHeadingContainer.styled";

import speedImage from "../../assets/images/speed.png";

const SchduledSpeed = (): JSX.Element => {
   const { campaign, updateCampaign } = useContext(CampaignContext) as CampaignContextType;
   const { schedulementSpeed } = campaign;

   return (
      <div>
         <SectionSubHeadingContainer>
            <img src={speedImage} alt="timing img" />
            <BoldText>Speed</BoldText>
            <span></span>
         </SectionSubHeadingContainer>
         <SpeedConfigContainer>
            <LightText>Send</LightText>
            <input
               type="text"
               value={schedulementSpeed.noOfEmails}
               onChange={(e) => updateCampaign({ ...campaign, schedulementSpeed: { ...schedulementSpeed, noOfEmails: e.target.value } })}
            />
            <LightText>emails / day</LightText>
         </SpeedConfigContainer>
         <SpeedConfigContainer>
            <SpeedLabel>
               <CheckboxInput
                  type="checkbox"
                  checked={!schedulementSpeed.isPaused}
                  onChange={() => updateCampaign({ ...campaign, schedulementSpeed: { ...schedulementSpeed, isPaused: !schedulementSpeed.isPaused } })}
               />
               <LightText>Pause</LightText>
            </SpeedLabel>
            <Dropdown
               value={schedulementSpeed.selectedOauseTiming}
               disabled={schedulementSpeed.isPaused}
               onChange={(e) => updateCampaign({ ...campaign, schedulementSpeed: { ...schedulementSpeed, selectedPauseTiming: e.target.value } })}
            >
               {schedulementSpeed.pausedTimings.map((opt: string) => (
                  <option value={opt} key={opt}>
                     {opt}
                  </option>
               ))}
            </Dropdown>
            <LightText>between email</LightText>
         </SpeedConfigContainer>
      </div>
   );
};

export default SchduledSpeed;
