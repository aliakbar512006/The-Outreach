import { useState, Dispatch, SetStateAction } from "react";

import { BoldText, LightText } from "../styles/TextVariants.styled";
import { ScheduleContainer } from "../styles/ScheduleContainer.styled";
import { Dropdown } from "../styles/Dropdown.styled";
import { CheckboxInput } from "../styles/Checkbox.styled";
import { ScheduleLabel } from "../styles/LabelVariants.styled";
import { SectionHeadingContainer } from "../styles/SectionHeadingContainer.styled";

import scheduleImage from "../../assets/images/schedule.png";

interface ISchedule {
   scheduleTime: string[];
   isWeekendsSkipped: boolean;
   weekendPrompt: string;
}

const Schedule = (): JSX.Element => {
   const [schedulement, _] = useState<ISchedule>({ scheduleTime: ["Now", "5 minuted later"], weekendPrompt: "Skip weekends", isWeekendsSkipped: false });

   return (
      <div>
         <SectionHeadingContainer>
            <img src={scheduleImage} alt="follow-up img" />
            <BoldText>Schedule</BoldText>
         </SectionHeadingContainer>
         <ScheduleContainer>
            <LightText>Time: </LightText>
            <Dropdown>
               {schedulement.scheduleTime.map((time) => (
                  <option value={time} key={time}>
                     {time}
                  </option>
               ))}
            </Dropdown>
         </ScheduleContainer>
         <ScheduleLabel>
            <CheckboxInput type="checkbox" checked={schedulement.isWeekendsSkipped} />
            <LightText>{schedulement.weekendPrompt}</LightText>
         </ScheduleLabel>
      </div>
   );
};

export default Schedule;
