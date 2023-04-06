import React from "react";
import styled from "styled-components";
import { BoldText } from "../styles/TextVariants.styled";

const AutoFollowUp = (): JSX.Element => {
   return (
      <div>
         <BoldText>Auto Follow-up</BoldText>
         <FollowupContainer>
            <StageHeading>
               <BoldText>Stage 1:</BoldText>
            </StageHeading>
         </FollowupContainer>
      </div>
   );
};

const FollowupContainer = styled.div`
   margin-top: 10px;
`;

const StageHeading = styled.span`
   font-size: 12px;
`;

export default AutoFollowUp;
