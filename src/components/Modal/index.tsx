import React, { Dispatch, SetStateAction } from "react";

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
            <h2>Modal Window</h2>
            <div className="content">{children}</div>
            <div className="actions">
               <button className="toggle-button" onClick={(e) => onClose}>
                  close
               </button>
            </div>
         </div>
      </>
   );
};

export default Modal;
