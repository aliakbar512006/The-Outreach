import React, { Dispatch, SetStateAction } from "react";

import TestEmailBar from "./TestEmailBar";
import Tracking from "./Tracking";
import Action from "./Actions";
import AutoFollowUp from "./AutoFollowUp";

type ModalProps = {
   children: string;
   modalState: boolean;
   setModalState: Dispatch<SetStateAction<boolean>>;
};

const Modal = ({ children, modalState, setModalState }: ModalProps): JSX.Element => {
   const onClose = (e: React.MouseEvent): void => setModalState(false);

   if (!modalState) return <></>;
   return (
      <>
         <div className="modal">
            <div className="header"></div>
            <div className="content">
               <TestEmailBar />
               <div className="settings-box">
                  <p className="bold-text"> Settings: </p>
                  <div className="settings-box-content">
                     <Tracking />
                     <Action />
                     <AutoFollowUp />
                  </div>
               </div>
            </div>
            <div className="actions">
               <button className="toggle-button" onClick={(e) => onClose(e)}>
                  Close
               </button>
            </div>
         </div>
      </>
   );
};

export default Modal;
