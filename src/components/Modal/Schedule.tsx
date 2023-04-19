import { useState } from "react";

import SchduledSpeed from "./Speed";
import ScheduledRepeat from "./Repeat";

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

interface ISchedule {
   timingFrom: string[];
   selectedTimingFrom: string;
   timingTo: string[];
   selectedTimingTo: string;
   timezones: string[];
   selectedTimezone: string;
   days: string[];
   selectedDays: string[];
}

const Schedule = (): JSX.Element => {
   const [schedulment, setSchedulment] = useState<ISchedule>({
      timingFrom: ["8:00 PM", "9:00 PM", "10:00 PM", "11:00 PM"],
      selectedTimingFrom: "8 PM",
      timingTo: ["8:00 PM", "9:00 PM", "10:00 PM", "11:00 PM"],
      selectedTimingTo: "9:00 PM",
      timezones: ["Eastern Time (US and Canada) (UTC - 5:00)"],
      selectedTimezone: "Eastern Time (US and Canada) (UTC - 5:00)",
      days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      selectedDays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
   });

   const handleSelectedDays = (selectedDay: string, dayState: boolean): void => {
      if (dayState === true) setSchedulment({ ...schedulment, selectedDays: [...schedulment.selectedDays, selectedDay] });
      else
         setSchedulment({
            ...schedulment,
            selectedDays: [...schedulment.selectedDays.filter((_, index) => index !== schedulment.selectedDays.indexOf(selectedDay))],
         });

      console.log(schedulment.selectedDays);
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
                     value={schedulment.selectedTimingFrom}
                     onChange={(e) => setSchedulment({ ...schedulment, selectedTimingFrom: e.target.value })}
                  >
                     {schedulment.timingFrom.map((time) => (
                        <option value={time} key={time}>
                           {time}
                        </option>
                     ))}
                  </Dropdown>
                  <LightText> To </LightText>
                  <Dropdown
                     value={schedulment.selectedTimingTo}
                     onChange={(e) => setSchedulment({ ...schedulment, selectedTimingTo: e.target.value })}
                  >
                     {schedulment.timingTo.map((time) => (
                        <option value={time} key={time}>
                           {time}
                        </option>
                     ))}
                  </Dropdown>
               </TimingDropdownContainer>
            </ScheduleContainer>

            <TimezoneContainer>
               <BoldText>Timezone</BoldText>
               <Dropdown value={schedulment.selectedTimezone} onChange={(e) => setSchedulment({ ...schedulment, selectedTimezone: e.target.value })}>
                  {schedulment.timezones.map((time) => (
                     <option value={time} key={time}>
                        {time}
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
               {schedulment.days.map((day) => (
                  <Label>
                     <CheckboxInput
                        type="checkbox"
                        checked={schedulment.selectedDays.includes(day)}
                        onChange={(e) => handleSelectedDays(day, !schedulment.selectedDays.includes(day))}
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
