import styled from "styled-components";

export const LightText = styled.p`
   font-size: 13px;
   font-family: "Montserrat-Regular";
`;

export const BoldText = styled(LightText)`
    font-size: 17px;
    font-weight: bolder;
    text-align: center;
    font-family: "Montserrat-SemiBold";
    color: ${({ theme }) => theme.colors.primaryColor}
`;

export const BolderText = styled(BoldText)`
    font-size: 30px;
`;