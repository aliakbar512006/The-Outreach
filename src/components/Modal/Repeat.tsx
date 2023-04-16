import { useContext } from "react";

import { CampaignContextType } from "../../@types/campaign";

import { CampaignContext } from "../../context/campaignContext";

import { LightText, BoldText } from "../styles/TextVariants.styled";
import { RepeatConfigContainer } from "../styles/ScheduleContainer.styled";
import { Dropdown } from "../styles/Dropdown.styled";
import { CheckboxInput } from "../styles/Checkbox.styled";
import { RepeatLabel } from "../styles/LabelVariants.styled";

const ScheduledRepeat = (): JSX.Element => {
   const { campaign, updateCampaign } = useContext(CampaignContext) as CampaignContextType;
   const { schedulementRepetition } = campaign;

   return (
      <div>
         <RepeatConfigContainer>
            <BoldText>Repeat: </BoldText>
            <RepeatLabel>
               <CheckboxInput
                  type="checkbox"
                  checked={!schedulementRepetition.isRepeatChecked}
                  onChange={() =>
                     updateCampaign({
                        ...campaign,
                        schedulementRepetition: { ...schedulementRepetition, isRepeatChecked: !schedulementRepetition.isRepeatChecked },
                     })
                  }
               />
               <LightText>Every</LightText>
            </RepeatLabel>
            <input
               type="text"
               value={schedulementRepetition.repeatCount}
               disabled={schedulementRepetition.isRepeatChecked}
               onChange={(e) => updateCampaign({ ...campaign, schedulementRepetition: { ...schedulementRepetition, repeatCount: e.target.value } })}
            />
            <Dropdown
               value={schedulementRepetition.selectedRpeatTimings}
               disabled={schedulementRepetition.isRepeatChecked}
               onChange={(e) =>
                  updateCampaign({ ...campaign, schedulementRepetition: { ...schedulementRepetition, selectedRpeatTimings: e.target.value } })
               }
            >
               {schedulementRepetition.repeatTimings.map((opt: string) => (
                  <option value={opt} key={opt}>
                     {opt}
                  </option>
               ))}
            </Dropdown>
         </RepeatConfigContainer>
      </div>
   );
};

export default ScheduledRepeat;
