export const defaultCampaign = {
    actionType: {
       mailType: "send",
    },
    trackingType: {
       isClick: true,
       isOpen: true,
    },
    followUpStages: [
       {
          no: 0,
          checked: false,
          message: "Just Making sure you saw this",
          actionTypes: ["No Reply", "No Open", "No Click", "Everyone"],
          selectedAction: "No Reply",
          days: "2",
          selectedTextType: "plain text",
       },
    ],
    schedulement: {
       timingFrom: ["8:00 PM", "9:00 PM", "10:00 PM", "11:00 PM"],
       selectedTimingFrom: "8 PM",
       timingTo: ["8:00 PM", "9:00 PM", "10:00 PM", "11:00 PM"],
       selectedTimingTo: "9:00 PM",
       timezones: ["Eastern Time (US and Canada) (UTC - 5:00)"],
       selectedTimezone: "Eastern Time (US and Canada) (UTC - 5:00)",
       days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
       selectedDays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    schedulementSpeed: {
       noOfEmails: "2",
       isPaused: true,
       pausedTimings: ["5 to 10 seconds", "10 to 60 seconds", "1 to 5 minutes"],
       selectedPauseTiming: "5 to 10 seconds",
    },
    schedulementRepetition: {
       repeatCount: "1",
       isRepeatChecked: true,
       repeatTimings: ["Day", "Hour", "Week", "Month"],
       selectedRpeatTimings: "Day",
    },
 }