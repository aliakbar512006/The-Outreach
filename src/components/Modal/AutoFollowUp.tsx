import { useState, Dispatch, SetStateAction } from "react";

import styled from "styled-components";

import { BoldText, LightText } from "../styles/TextVariants.styled";
import { FollowupContainer } from "../styles/ScheduleContainer.styled";
import { Dropdown } from "../styles/Dropdown.styled";
import { CheckboxInput } from "../styles/Checkbox.styled";
import { FollowUpLabel } from "../styles/LabelVariants.styled";
import { RadioInput } from "../styles/Radio.styled";
import { SectionHeadingContainer } from "../styles/SectionHeadingContainer.styled";

import followUpImage from "../../assets/images/follow-up.png";

interface IStage {
   no: number;
   checked: boolean;
   message: string;
   actionTypes: string[];
   selectedAction: string;
   days: string;
   selectedTextType: string;
}

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
   const [followUpStages, setFollowUpStages] = useState<IStage[]>([initializeStage(0)]);

   return (
      <div>
         <SectionHeadingContainer>
            <img src={followUpImage} alt="follow-up img" />
            <BoldText>Auto Follow-up</BoldText>
         </SectionHeadingContainer>
         {followUpStages.map((stage) => (
            <Stage stage={stage} followUpStages={followUpStages} setFollowUpStages={setFollowUpStages} key={stage.no} />
         ))}
      </div>
   );
};

type StageProps = {
   stage: IStage;
   followUpStages: IStage[];
   setFollowUpStages: Dispatch<SetStateAction<IStage[]>>;
};

const Stage = ({ stage, followUpStages, setFollowUpStages }: StageProps): JSX.Element => {
   const changeInputState = (stateName: string, value: string | boolean): void => {
      const prevStage = followUpStages;
      prevStage[stage.no][stateName] = value;
      setFollowUpStages([...prevStage]);
   };

   const createNewStage = (): void => {
      const prevStages = followUpStages;
      prevStages[stage.no].checked = true;
      setFollowUpStages([...prevStages, initializeStage(followUpStages.length, "2")]);
   };

   const removeStages = (): void => {
      const updatedStages = followUpStages.slice(0, stage.no + 1);
      updatedStages[stage.no].checked = false;
      setFollowUpStages(updatedStages);
   };

   const handleStages = (): void => {
      if (!stage.checked) createNewStage();
      else removeStages();
   };

   return (
      <>
         <StageHeading>
            <BoldText>Stage {stage.no + 1} :</BoldText>
         </StageHeading>
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

const StageHeading = styled.div`
   margin-top: 15px;
   font-size: 12px;
`;

const TextArea = styled.textarea`
   margin: 10px 30px;
   width: 90%;
   padding: 5px 10px;
   font-family: "Poppins-Regular";
   font-size: 12.5px;
   resize: none;
`;

export default AutoFollowUp;
