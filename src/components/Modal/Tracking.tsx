import { useState, Dispatch, SetStateAction } from "react";

const Tracking = (): JSX.Element => {
   const [isOpenChecked, setIsOpenChecked] = useState<boolean>(false);
   const [isClicksChecked, setIsClicksChecked] = useState<boolean>(false);

   return (
      <div>
         <p className="bold-text">Tracking</p>
         <div className="tracking-section-container">
            <Checkbox label="Opens" checked={isOpenChecked} setIsChecked={setIsOpenChecked} />
            <Checkbox label="Clicks" checked={isClicksChecked} setIsChecked={setIsClicksChecked} />
         </div>
      </div>
   );
};

type CheckboxProps = {
   label: string;
   checked: boolean;
   setIsChecked: Dispatch<SetStateAction<boolean>>;
};

const Checkbox = ({ label, checked, setIsChecked }: CheckboxProps) => {
   return (
      <div className="checkbox-container">
         <label>
            <input type="checkbox" checked={checked} className={checked ? "checked" : ""} onChange={() => setIsChecked((prev: boolean) => !prev)} />
            <span>{label}</span>
         </label>
      </div>
   );
};

export default Tracking;
