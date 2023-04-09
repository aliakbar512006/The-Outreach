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
   actionType: string[];
   days: number;
   currentTextPrompt: string;
   isCurrentTextChecked: boolean;
   richTextPrompt: string;
   isRichTextChecked: boolean;
}

var initializeStage = (no: number, days?: number): IStage => {
   return {
      no,
      checked: false,
      message: "Just Making sure you saw this",
      actionType: ["No Reply", "No Open", "No Click", "Everyone"],
      days: days || 2,
      isCurrentTextChecked: true,
      currentTextPrompt: "Send text above original:",
      richTextPrompt: "Send rich-text email in same thread",
      isRichTextChecked: false,
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
   const [days, setDays] = useState<number>(stage.days);

   // const changeInputState = (stateName: string, value: boolean): void =>{
   //    stage[stateName] = value
   // }

   const createNewStage = (): void => {
      const prevStages = followUpStages;
      prevStages[stage.no].checked = true;
      setFollowUpStages([...prevStages, initializeStage(followUpStages.length, stage.days * 2)]);
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
            <LightText>If </LightText>
            <Dropdown>
               {stage.actionType.map((opt) => (
                  <option value={opt} key={opt}>
                     {opt}
                  </option>
               ))}
            </Dropdown>
            <LightText> after </LightText>
            <input type="string" value={days} onChange={(e) => setDays(+e.target.value)} />
         </FollowupContainer>
         {stage.checked && (
            <>
               <FollowUpLabel>
                  <RadioInput type="radio" value={`radio text ${stage.no}`} checked={stage.isCurrentTextChecked} />
                  <LightText>{stage.currentTextPrompt}</LightText>
               </FollowUpLabel>
               <TextArea rows={3} cols={8} value={stage.message} />
               <FollowUpLabel>
                  <RadioInput type="radio" value={`radio text ${stage.no}`} checked={stage.isRichTextChecked} />
                  <LightText>{stage.richTextPrompt}</LightText>
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
