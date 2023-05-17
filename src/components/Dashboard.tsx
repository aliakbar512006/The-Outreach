import React, { useState } from 'react'
import { Container, Overlay } from '../App'
import Modal from './Modal'
import FileUploadModal from './Modal/FileUploadModal';
import { OutreachButton } from './styles/ButtonVariants.styled';

const Dashboard = () => {
    const [modalState, setModalState] = useState<boolean>(false);
    const [recipientModalState, setRecipientModalState] = useState<boolean>(false);
    const [bulkRecipients, setBulkRecipients] = useState<string>("");
    const [recipientsInputType, seRecipientsInputType] = useState<string>("");

    const showModal = (e: React.MouseEvent): void => setModalState(true);
  return (
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
  )
}

export default Dashboard