import { useState } from "react";

import { BoldText, LightText } from "../styles/TextVariants.styled";
import { ScheduleContainer } from "../styles/ScheduleContainer.styled";
import { Dropdown } from "../styles/Dropdown.styled";
import { CheckboxInput } from "../styles/Checkbox.styled";
import { ScheduleLabel } from "../styles/LabelVariants.styled";
import { SectionHeadingContainer } from "../styles/SectionHeadingContainer.styled";

import scheduleImage from "../../assets/images/schedule.png";

interface ISchedule {
   scheduledTimes: string[];
   isWeekendsSkipped: boolean;
   selectedScheduledTime: string;
}

const Schedule = (): JSX.Element => {
   const [schedulment, setSchedulment] = useState<ISchedule>({
      scheduledTimes: ["Now", "5 minutes later", "20 minutes later", "30 minutes later", "35 minutes later", "40 minutes later", "45 minutes later"],
      selectedScheduledTime: "Now",
      isWeekendsSkipped: false,
   });

   return (
      <div>
         <SectionHeadingContainer>
            <img src={scheduleImage} alt="follow-up img" />
            <BoldText>Schedule</BoldText>
         </SectionHeadingContainer>
         <ScheduleContainer>
            <LightText>Time: </LightText>
            <Dropdown value={schedulment.selectedScheduledTime} onChange={(e) => setSchedulment({ ...schedulment, selectedScheduledTime: e.target.value })}>
               {schedulment.scheduledTimes.map((time) => (
                  <option value={time} key={time}>
                     {time}
                  </option>
               ))}
            </Dropdown>
         </ScheduleContainer>
         <ScheduleLabel>
            <CheckboxInput type="checkbox" checked={schedulment.isWeekendsSkipped} onChange={() => setSchedulment({ ...schedulment, isWeekendsSkipped: !schedulment.isWeekendsSkipped })} />
            <LightText>Skip Weekends</LightText>
         </ScheduleLabel>
      </div>
   );
};

export default Schedule;
