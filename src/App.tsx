import { useEffect, useState } from "react";

import Modal from "./components/Modal";
import FileUploadModal from "./components/Modal/FileUploadModal";

import styled from "styled-components";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/Global";
import { OutreachButton } from "./components/styles/ButtonVariants.styled";
import { apiGet } from "./utils/axios";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Social from "./components/Social";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import DataProvider from "./context/authcontext";

const theme = {
   colors: {
      primaryColor: "#6662F4",
      borderColor: "#6662F4",
   },
};

const App = (): any => {
   const [modalState, setModalState] = useState<boolean>(false);
   const [recipientModalState, setRecipientModalState] = useState<boolean>(false);
   const [bulkRecipients, setBulkRecipients] = useState<string>("");
   const [recipientsInputType, seRecipientsInputType] = useState<string>("");

   const showModal = (e: React.MouseEvent): void => setModalState(true);

   const handleClick = () => {
      window.location.href = process.env.REACT_APP_REDIRECT!
   }

   useEffect(() => {
       if (window.location.pathname === "/dashboard") {
         setModalState(!modalState);
      }
   }, [])


   return (
      <DataProvider>
      <ThemeProvider theme={theme}>
         
             <Login show={modalState} click={handleClick}/> 
           
            
           
            <GlobalStyles />
               <Routes>
                  {/* <Route path="/" element={<Login />} /> */}
                  <Route path="/social/*" element={<Social />} />
                  <Route path="/dashboard" element={<Dashboard />} />
               </Routes>
   
      </ThemeProvider>
      </DataProvider>
   );
};

export default App;

export const Container = styled.div`
   display: flex;
   height: 100vh;
   justify-content: center;
   align-items: center;
`;

export const Overlay = styled.div`
   position: absolute;
   inset: 0;
   display: flex;
   justify-content: center;
   align-items: center;
   // background-color: rgba(0, 0, 0, 0.8);
   z-index: 2;
`;
