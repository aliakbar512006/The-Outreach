import { useContext } from "react";

import SchduledSpeed from "./Speed";
import ScheduledRepeat from "./Repeat";

import { CampaignContextType } from "../../@types/campaign";

import { CampaignContext } from "../../context/campaignContext";

import styled from "styled-components";

import { BoldText, LightText } from "../styles/TextVariants.styled";
import { ScheduleContainer } from "../styles/ScheduleContainer.styled";
import { Dropdown } from "../styles/Dropdown.styled";
import { CheckboxInput } from "../styles/Checkbox.styled";
import { Label } from "../styles/LabelVariants.styled";
import { SectionHeadingContainer, SectionSubHeadingContainer } from "../styles/SectionHeadingContainer.styled";

import scheduleImage from "../../assets/images/schedule.png";
import timingImage from "../../assets/images/timing.png";
import dayImage from "../../assets/images/day.png";

const Schedule = (): JSX.Element => {
   const { campaign, updateCampaign } = useContext(CampaignContext) as CampaignContextType;
   const { schedulement } = campaign;

   const handleSelectedDays = (selectedDay: string, dayState: boolean): void => {
      if (dayState === true)
         updateCampaign({ ...campaign, schedulement: { ...schedulement, selectedDays: [...campaign.schedulement.selectedDays, selectedDay] } });
      else
         updateCampaign({
            ...campaign,
            schedulement: {
               ...schedulement,
               selectedDays: [
                  ...schedulement.selectedDays.filter((_: any, index: number) => index !== schedulement.selectedDays.indexOf(selectedDay)),
               ],
            },
         });
   };

   return (
      <div>
         <>
            <SectionHeadingContainer>
               <img src={scheduleImage} alt="follow-up img" />
               <BoldText>Schedule</BoldText>
               <span></span>
            </SectionHeadingContainer>

            <ScheduleContainer>
               <SectionSubHeadingContainer>
                  <img src={timingImage} alt="timing img" />
                  <BoldText>Timing</BoldText>
                  <span></span>
               </SectionSubHeadingContainer>
               <TimingDropdownContainer>
                  <Dropdown
                     value={schedulement.selectedTimingFrom}
                     onChange={(e) => updateCampaign({ ...campaign, schedulement: { ...schedulement, selectedTimingFrom: e.target.value } })}
                  >
                     {schedulement.timingFrom.map((timeFrom: string) => (
                        <option value={timeFrom} key={timeFrom}>
                           {timeFrom}
                        </option>
                     ))}
                  </Dropdown>
                  <LightText> To </LightText>
                  <Dropdown
                     value={schedulement.selectedTimingTo}
                     onChange={(e) => updateCampaign({ ...campaign, schedulement: { ...schedulement, selectedTimingTo: e.target.value } })}
                  >
                     {schedulement.timingTo.map((timeTo: string) => (
                        <option value={timeTo} key={timeTo}>
                           {timeTo}
                        </option>
                     ))}
                  </Dropdown>
               </TimingDropdownContainer>
            </ScheduleContainer>

            <TimezoneContainer>
               <BoldText>Timezone</BoldText>
               <Dropdown
                  value={schedulement.selectedTimezone}
                  onChange={(e) => updateCampaign({ ...campaign, schedulement: { ...schedulement, selectedTimezone: e.target.value } })}
               >
                  {schedulement.timezones.map((timzone: string) => (
                     <option value={timzone} key={timzone}>
                        {timzone}
                     </option>
                  ))}
               </Dropdown>
            </TimezoneContainer>

            <SectionSubHeadingContainer>
               <img src={dayImage} alt="day img" />
               <BoldText>Days</BoldText>
               <span></span>
            </SectionSubHeadingContainer>
            <DaysContainer>
               {schedulement.days.map((day: string) => (
                  <Label>
                     <CheckboxInput
                        type="checkbox"
                        checked={schedulement.selectedDays.includes(day)}
                        onChange={(e) => handleSelectedDays(day, !schedulement.selectedDays.includes(day))}
                        key={day}
                     />
                     <LightText>{day}</LightText>
                  </Label>
               ))}
            </DaysContainer>
         </>
         <HRLineBreak />
         <SchduledSpeed />
         <HRLineBreak />
         <ScheduledRepeat />
      </div>
   );
};

const TimingDropdownContainer = styled.div`
   width: 70%;
   display: flex;
   justify-content: center;
   column-gap: 20px;
   align-items: center;
`;

const TimezoneContainer = styled.div`
   margin: 20px 0;
   display: flex;
   flex-direction: column;
   row-gap: 10px;
   align-items: center;

   select {
      padding: 2px 0;
      text-align: center;
      min-width: 300px;
      max-width: 300px;
      font-size: 12px;
   }
`;

const DaysContainer = styled.div`
   margin-bottom: 15px;
   padding: 10px 0;
   display: flex;
   flex-wrap: wrap;
   gap: 10px;
   justify-content: center;
`;

const HRLineBreak = styled.span`
   display: block;
   margin-end: auto;
   margin-start: auto;
   border-bottom: 0.5px solid rgb(197, 193, 193);
   overflow: hidden;
   margin-before: 0.2em;
   margin-after: 0.2em;
`;

export default Schedule;
