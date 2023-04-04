import { useState } from "react";

import Modal from "./components/Modal";
import "./index.scss";

function App() {
   const [modalState, setModalState] = useState({
      show: false,
   });

   const showModal = (e) =>
      setModalState({
         show: true,
      });

   return (
      <div className="container">
         <button className="toggle-button" id="centered-toggle-button" onClick={(e) => showModal()}>
            Outreach
         </button>
         <Modal modalState={modalState} setModalState={setModalState}>
            Message in Modal
         </Modal>
      </div>
   );
}

export default App;
