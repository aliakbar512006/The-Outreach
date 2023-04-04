import React from "react";

const Modal = ({ children, modalState, setModalState }) => {
   const onClose = (e) => setModalState(false);

   if (!modalState.show) return <></>;
   return (
      <>
         <div className="modal">
            <h2>Modal Window</h2>
            <div className="content">{children}</div>
            <div className="actions">
               <button className="toggle-button" onClick={onClose}>
                  close
               </button>
            </div>
         </div>
      </>
   );
};

export default Modal;
