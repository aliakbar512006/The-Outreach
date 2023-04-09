import styled from "styled-components";


export const FollowupContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 0;
    column-gap: 5px;

    input, select {
        max-width: 35px;
        padding: 1px 5px;
        text-align: center;
    }

    select {
        min-width: 100px;
        font-family: "Poppins-Regular";
        font-size: 12px;
    }

`

export const ScheduleContainer = styled(FollowupContainer)`
    column-gap: 20px;

    select {
        min-width: 150px;
    }
`