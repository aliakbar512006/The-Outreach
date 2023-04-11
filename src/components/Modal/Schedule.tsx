import { useState } from "react";

import SchduledSpeed from "./Speed";

import styled from "styled-components";

import { BoldText, LightText } from "../styles/TextVariants.styled";
import { ScheduleContainer } from "../styles/ScheduleContainer.styled";
import { Dropdown } from "../styles/Dropdown.styled";
import { CheckboxInput } from "../styles/Checkbox.styled";
import { ScheduleLabel } from "../styles/LabelVariants.styled";
import { SectionHeadingContainer } from "../styles/SectionHeadingContainer.styled";

import scheduleImage from "../../assets/images/schedule.png";
import ScheduledRepeat from "./Repeat";

interface ISchedule {
   isWeekendsSkipped: boolean;
   timingFrom: string[];
   selectedTimingFrom: string;
   timingTo: string[];
   selectedTimingTo: string;
   selectedScheduledTime: string;
   timezones: string[];
   selectedTimezone: string;
}

const Schedule = (): JSX.Element => {
   const [schedulment, setSchedulment] = useState<ISchedule>({
      timingFrom: ["8:00 PM", "9:00 PM", "10:00 PM", "11:00 PM"],
      selectedTimingFrom: "8 PM",
      timingTo: ["8:00 PM", "9:00 PM", "10:00 PM", "11:00 PM"],
      selectedTimingTo: "9:00 PM",
      selectedScheduledTime: "Now",
      isWeekendsSkipped: false,
      timezones: ["Eastern Time ('US and Canada') (UTC - 5:00)"],
      selectedTimezone: "Eastern Time('US and Canada')(UTC - 5:00)",
   });

   return (
      <div>
         <>
            <SectionHeadingContainer>
               <img src={scheduleImage} alt="follow-up img" />
               <BoldText>Schedule</BoldText>
               <span></span>
            </SectionHeadingContainer>
            <ScheduleContainer>
               <BoldText>Timing</BoldText>
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

            <ScheduleLabel>
               <CheckboxInput
                  type="checkbox"
                  checked={schedulment.isWeekendsSkipped}
                  onChange={() => setSchedulment({ ...schedulment, isWeekendsSkipped: !schedulment.isWeekendsSkipped })}
               />
               <LightText>Skip Weekends</LightText>
            </ScheduleLabel>
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
