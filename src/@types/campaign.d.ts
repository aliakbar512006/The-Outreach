// @types.global.ts
export interface IAction {
   mailType: string,

}
export interface ITracking {
   isOpen?: boolean,
   isClick?: boolean,

}
export interface IStage {
    no: number;
    checked: boolean;
    message: string;
    actionTypes: string[];
    selectedAction: string;
    days: string;
    selectedTextType: string;
 }
 export interface ISchedule {
    timingFrom: string[];
    selectedTimingFrom: string;
    timingTo: string[];
    selectedTimingTo: string;
    timezones: string[];
    selectedTimezone: string;
    days: string[];
    selectedDays: string[];
 }
 export interface IScheduledSpeed {
    noOfEmails: string;
    isPaused: boolean;
    pausedTimings: string[];
    selectedPauseTiming: string;
 }
 export interface IScheduledRepeat {
    isRepeatChecked: boolean;
    repeatCount: string;
    repeatTimings: string[];
    selectedRpeatTimings: string;
 }
 export interface ICampaign {
    actionType: IAction,
    trackingType: ITracking,
    followUpStages: IStage[];
    schedulement: ISchedule;
    schedulementSpeed: IScheduledSpeed;
    schedulementRepetition:  IScheduledRepeat;
 }

 export type CampaignContextType = {
    campaign: ICampign,
    updateCampaign: (updateCampaign: ICampign) => void;
  };