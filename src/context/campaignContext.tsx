// context/globalContext.tsx
import { ReactNode, createContext, useState } from "react";

import { CampaignContextType, ICampaign } from "../@types/campaign";

import { defaultCampaign } from "../utils/constants/campaign";

export const CampaignContext = createContext<CampaignContextType | null>(null);

interface IProps {
   children: ReactNode;
}

const CampaignProvider = ({ children }: IProps) => {
   const [campaign, setCampaign] = useState<ICampaign>(defaultCampaign);

   const updateCampaign = (updatedCampaign: ICampaign) => {
      setCampaign(updatedCampaign);
   };

   return <CampaignContext.Provider value={{ campaign, updateCampaign }}>{children}</CampaignContext.Provider>;
};

export default CampaignProvider;
