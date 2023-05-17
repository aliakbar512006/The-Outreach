import React, { createContext } from "react";
import { apiGet, apiPost } from "../utils/axios";


export const dataContext = createContext<any | null>(null);
interface Tracking{
  isOpened: boolean;
  isClicked: boolean;
}
interface Stage {
    id: string;
    condition: string; //no reply, no open, no click, everyone
    sendType: string; //plain or rich
    duration:string; //days
    message: string; //message
}

interface speed{
    mailsPerDay: string;
    delay: string;
}

interface Schedule{
    start:string;
    end:string;
    timezone: string;
    days: string[];
    speed: speed;
    repeat: string;
}

export interface FormData{
    userId: string;
    emailList: string[];
    tracking: Tracking;
    action: string;
    autofollowup: Stage[];
    schedule: Schedule;
    interval:string;
    email:string[];
    lastRun: Date;
    nextRun: Date;
}



 
const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const id = localStorage.getItem("signature")
  
    const [formData, setFormData] = React.useState({
        userId: id,
        emailList: [],
        tracking: {
            isOpened: true,
            isClicked: true
        },
        action: "",
        autofollowup: [],
        schedule: {
            start: new Date(),
            end: new Date(),
            timezone: new Date(),
            days: [],
            speed: {
                mailsPerDay: 0,
                delay: 0
            },
            repeat: 0
        },
        interval:"5",
        email:[],
        lastRun: new Date(),
        nextRun: new Date()
    }) as unknown as [FormData, React.Dispatch<React.SetStateAction<FormData>>];
     
    const createJobs = async (data: FormData) => {
      console.log('data',data);
      try{
        const response = await apiPost("/schedule/create", data);
      
        console.log('response');
      }catch(err){
        console.log('helo');
      }
    };




  return (
    <dataContext.Provider 
    value={{
        formData,
        setFormData,
        createJobs
      }}>
      {children}
    </dataContext.Provider>
  )
     
};

export const useAuth = () => {
  const context = React.useContext(dataContext);
  if (context === "undefined") {
    throw new Error("useAuth must be used within the auth provider");
  }
  return context;
};

export default DataProvider;