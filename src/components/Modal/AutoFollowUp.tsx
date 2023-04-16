import { useContext } from "react";

import styled from "styled-components";

import { IStage, CampaignContextType, ICampaign } from "../../@types/campaign";

import { CampaignContext } from "../../context/campaignContext";

import { BoldText, LightText } from "../styles/TextVariants.styled";
import { FollowupContainer } from "../styles/ScheduleContainer.styled";
import { Dropdown } from "../styles/Dropdown.styled";
import { CheckboxInput } from "../styles/Checkbox.styled";
import { FollowUpLabel } from "../styles/LabelVariants.styled";
import { RadioInput } from "../styles/Radio.styled";
import { SectionHeadingContainer, SectionSubHeadingContainer } from "../styles/SectionHeadingContainer.styled";

import followUpImage from "../../assets/images/follow-up.png";
import stageImage from "../../assets/images/stages.png";

var initializeStage = (no: number, days?: string): IStage => {
   return {
      no,
      checked: false,
      message: "Just Making sure you saw this",
      actionTypes: ["No Reply", "No Open", "No Click", "Everyone"],
      selectedAction: "No Reply",
      days: days || "2",
      selectedTextType: "plain text",
   };
};

const AutoFollowUp = (): JSX.Element => {
   const { campaign, updateCampaign } = useContext(CampaignContext) as CampaignContextType;

   return (
      <div>
         <SectionHeadingContainer>
            <img src={followUpImage} alt="follow-up img" />
            <BoldText>Auto Follow-up</BoldText>
            <span></span>
         </SectionHeadingContainer>
         {campaign.followUpStages.map((stage: IStage) => (
            <Stage stage={stage} campaign={campaign} updateFollowUpStages={updateCampaign} key={stage.no} />
         ))}
      </div>
   );
};

type StageProps = {
   stage: IStage;
   campaign: ICampaign;
   updateFollowUpStages: (updateCampaign: ICampaign) => void;
};
const Stage = ({ stage, campaign, updateFollowUpStages }: StageProps): JSX.Element => {
   const changeInputState = (stateName: string, value: string | boolean): void => {
      const prevStages = campaign.followUpStages;
      prevStages[stage.no][stateName] = value;
      updateFollowUpStages({ ...campaign, followUpStages: [...prevStages] });
   };

   const createNewStage = (): void => {
      const prevStages = campaign.followUpStages;
      prevStages[stage.no].checked = true;
      updateFollowUpStages({ ...campaign, followUpStages: [...prevStages, initializeStage(campaign.followUpStages.length, "2")] });
   };

   const removeStages = (): void => {
      const updatedStages = campaign.followUpStages.slice(0, stage.no + 1);
      updatedStages[stage.no].checked = false;
      updateFollowUpStages({ ...campaign, followUpStages: [...updatedStages] });
   };

   const handleStages = (): void => {
      if (!stage.checked) createNewStage();
      else removeStages();
   };

   return (
      <>
         <SectionSubHeadingContainer>
            <img src={stageImage} alt="timing img" />
            <BoldText>Stage {stage.no + 1}</BoldText>
            <span></span>
         </SectionSubHeadingContainer>
         <FollowupContainer>
            <CheckboxInput type="checkbox" checked={stage.checked} onChange={() => handleStages()} />
            <LightText>If</LightText>
            <Dropdown value={stage.selectedAction} onChange={(e) => changeInputState("selectedAction", e.target.value)}>
               {stage.actionTypes.map((opt) => (
                  <option value={opt} key={opt}>
                     {opt}
                  </option>
               ))}
            </Dropdown>
            <LightText>after</LightText>
            <input type="string" value={stage.days} onChange={(e) => changeInputState("days", e.target.value)} />
         </FollowupContainer>
         {stage.checked && (
            <>
               <FollowUpLabel>
                  <RadioInput
                     type="radio"
                     name={`radio ${stage.no}`}
                     value="plain text"
                     defaultChecked
                     onChange={(e) => changeInputState("selectedTextType", e.target.value)}
                  />
                  <LightText>Send text above original:</LightText>
               </FollowUpLabel>
               <TextArea rows={3} cols={8} value={stage.message} onChange={(e) => changeInputState("message", e.target.value)} />
               <FollowUpLabel>
                  <RadioInput
                     type="radio"
                     name={`radio ${stage.no}`}
                     value="rich text"
                     onChange={(e) => changeInputState("selectedTextType", e.target.value)}
                  />
                  <LightText>Send rich-text email in same thread</LightText>
               </FollowUpLabel>
            </>
         )}
      </>
   );
};

const TextArea = styled.textarea`
   width: 90%;
   display: flex;
   justify-content: center;
   margin: 10px 20px;
   padding: 10px 20px;
   font-family: "Montserrat-Regular";
   font-size: 12.5px;
   resize: none;
   border-radius: 45px;
`;

export default AutoFollowUp;
