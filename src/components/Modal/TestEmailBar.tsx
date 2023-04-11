import RecipientTags from "./RecipientTags";

import styled from "styled-components";

import { LightText } from "../styles/TextVariants.styled";
import { TestEmailButton } from "../styles/ButtonVariants.styled";

const TestEmailBar = (): JSX.Element => {
   return (
      <>
         <LightText>Send Emails</LightText>
         <TestEmailContainer>
            <RecipientTags tags={["dev@gmail.com"]} />
            <TestEmailButton> Send Test </TestEmailButton>
         </TestEmailContainer>
      </>
   );
};

export default TestEmailBar;

const TestEmailContainer = styled.div`
   display: flex;
   column-gap: 5px;
   padding: 5px 0px;
   width: 100%;
   margin: 0 0 20px 0;
`;
