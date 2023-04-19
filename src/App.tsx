import { useState } from "react";

import Modal from "./components/Modal";
import FileUploadModal from "./components/Modal/FileUploadModal";

import CampaignProvider from "./context/campaignContext";

import styled from "styled-components";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/Global";
import { OutreachButton } from "./components/styles/ButtonVariants.styled";

const theme = {
   colors: {
      primaryColor: "#6662F4",
      borderColor: "#6662F4",
   },
};

const App = (): JSX.Element => {
   const [modalState, setModalState] = useState<boolean>(false);
   const [recipientModalState, setRecipientModalState] = useState<boolean>(false);
   const [bulkRecipients, setBulkRecipients] = useState<string>("");
   const [recipientsInputType, seRecipientsInputType] = useState<string>("");

   const showModal = (e: React.MouseEvent): void => setModalState(true);

   return (
      <ThemeProvider theme={theme}>
         <CampaignProvider>
            <GlobalStyles />
            <Container>
               <OutreachButton onClick={(e) => showModal(e)}>Outreach</OutreachButton>
               <Modal
                  modalState={modalState}
                  setModalState={setModalState}
                  setRecipientModalState={setRecipientModalState}
                  bulkRecipients={bulkRecipients}
                  setBulkRecipients={setBulkRecipients}
                  inputType={recipientsInputType}
               >
                  Message in Modal
               </Modal>
               {recipientModalState && (
                  <Overlay>
                     <FileUploadModal
                        modalState={recipientModalState}
                        setModalState={setRecipientModalState}
                        setBulkRecipients={setBulkRecipients}
                        seRecipientsInputType={seRecipientsInputType}
                     />
                  </Overlay>
               )}
            </Container>
         </CampaignProvider>
      </ThemeProvider>
   );
};

export default App;

const Container = styled.div`
   display: flex;
   height: 100vh;
   justify-content: center;
   align-items: center;
`;

const Overlay = styled.div`
   position: absolute;
   inset: 0;
   display: flex;
   justify-content: center;
   align-items: center;
   // background-color: rgba(0, 0, 0, 0.8);
   z-index: 2;
`;
