import { useState } from "react";

import Modal from "./components/Modal";
import "./index.scss";

const App = (): JSX.Element => {
   const [modalState, setModalState] = useState<boolean>(false);

   const showModal = (e: React.MouseEvent): void => setModalState(true);

   return (
      <div className="container">
         <button className="outreach-btn" id="centered-toggle-button" onClick={(e) => showModal(e)}>
            Outreach
         </button>
         <Modal modalState={modalState} setModalState={setModalState}>
            Message in Modal
         </Modal>
      </div>
   );
};

export default App;
