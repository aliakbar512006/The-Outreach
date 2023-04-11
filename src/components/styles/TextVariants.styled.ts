import styled from "styled-components";

export const LightText = styled.p`
   font-size: 13px;
   font-family: "Poppins-Regular";
`;

export const BoldText = styled(LightText)`
    font-size: 15px;
    font-weight: bolder;
    text-align: center;
    font-family: "Poppins-SemiBold";
    color: ${({ theme }) => theme.colors.primaryColor}
`;

export const BolderText = styled(BoldText)`
    font-size: 30px;
`;