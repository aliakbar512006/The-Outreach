import styled from "styled-components";

export const Button = styled.button`
    border: 0;
    background: ${({ theme }) => theme.colors.primaryColor};
    border-radius: 2px;
    padding: 0.5rem 1rem;
    font-size: 14px;
    line-height: 1;
    color: white;
    cursor: pointer;
`

export const OutreachButton = styled(Button)`
   position: absolute;
   font-size: 20px;
`;

export const TestEmailButton = styled(Button)`
   width: 40%;
   max-height: 45px;
`;