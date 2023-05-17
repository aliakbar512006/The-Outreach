import { useState, useEffect } from "react";

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
import { useAuth } from "../../context/authcontext";

interface IScheduledSpeed {
   noOfEmails: string;
   isPaused: boolean;
   pausedTimings: string[];
   selectedOauseTiming: string;
}

interface IScheduledRepeat {
   isRepeatChecked: boolean;
   repeatCount: string;
   repeatTimings: string[];
   selectedRpeatTimings: string;
}

interface ISchedule {
   timingFrom: string[];
   selectedTimingFrom: string;
   timingTo: string[];
   selectedTimingTo: string;
   timezones: string[];
   selectedTimezone: string;
   days: string[];
   selectedDays: string[];
   speed: IScheduledSpeed;
   repeat: IScheduledRepeat;
}

const Schedule = (): JSX.Element => {
   const {formData, setFormData} = useAuth()

   const [schedulment, setSchedulment] = useState<ISchedule>({
      timingFrom: ["8:00:00", "9:00:00", "10:00:00", "11:00:00"],
      selectedTimingFrom: "8:00:00",
      timingTo: ["8:00:00", "9:00:00", "10:00:00", "11:00:00"],
      selectedTimingTo: "9:00:00",
      timezones: ["Eastern Time (US and Canada) (UTC - 5:00)"],
      selectedTimezone: "Eastern Time (US and Canada) (UTC - 5:00)",
      days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      selectedDays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      speed:{
         noOfEmails: "2",
         isPaused: true,
         pausedTimings: ["5 to 10 seconds", "10 to 60 seconds", "1 to 5 minutes"],
         selectedOauseTiming: "5 to 10 seconds",
      },
      repeat:{
         repeatCount: "1",
         isRepeatChecked: true,
         repeatTimings: ["Day", "Hour", "Week", "Month"],
         selectedRpeatTimings: "Day",
      }
   });

   const handleTimeFormat = (time: string): string => {
      const format = time.split(" ")[0] + ":00"
      return format
   }


  const convertToTimezone = async () => {
   try {
     const response = await fetch('https://worldtimeapi.org/api/timezone/')
     const data = await response.json()
     setSchedulment({...schedulment, timezones: data})
   } catch (error:any) {
     console.error(error);
   }
 };

   
 useEffect(() => {
   convertToTimezone()
   }, [])


   const handleSelectedDays = (selectedDay: string, dayState: boolean): void => {
      if (dayState === true) setSchedulment({ ...schedulment, selectedDays: [...schedulment.selectedDays, selectedDay] });
      else
         setSchedulment({
            ...schedulment,
            selectedDays: [...schedulment.selectedDays.filter((_, index) => index !== schedulment.selectedDays.indexOf(selectedDay))],
         });
   };


   const handleSchedule = (schedule:ISchedule): void => {
      setFormData({...formData, schedule:{
         start: schedule.selectedTimingFrom,
         end: schedule.selectedTimingTo,
         days: schedule.selectedDays,
         timezone: schedule.selectedTimezone,
         speed:{
            mailsPerDay:schedule.speed.noOfEmails,
            delay:schedule.speed.selectedOauseTiming
         },
         repeat:schedule.repeat.repeatCount
      }})
      
   }

   useEffect(() => {
      handleSchedule(schedulment)
   }, [schedulment])

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
                  {schedulment.timezones.map((time:string, id:number) => (
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
         <SchduledSpeed state={schedulment} setState={setSchedulment} />
         <HRLineBreak />
         <ScheduledRepeat state={schedulment} setState={setSchedulment} />
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
