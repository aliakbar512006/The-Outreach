import { useState } from "react";

import Modal from "./components/Modal";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/Global";
import styled from "styled-components";
import { OutreachButton } from "./components/styles/ButtonVariants.styled";

const theme = {
   colors: {
      primaryColor: "#6350c1",
      borderColor: "#6350c1",
   },
};

const App = (): JSX.Element => {
   const [modalState, setModalState] = useState<boolean>(false);

   const showModal = (e: React.MouseEvent): void => setModalState(true);

   return (
      <ThemeProvider theme={theme}>
         <>
            <GlobalStyles />
            <Container>
               <OutreachButton onClick={(e) => showModal(e)}>Outreach</OutreachButton>
               <Modal modalState={modalState} setModalState={setModalState}>
                  Message in Modal
               </Modal>
            </Container>
         </>
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
