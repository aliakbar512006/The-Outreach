import styled from "styled-components";

export const Label = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
` 

export const FollowUpLabel = styled(Label)`
    margin: 0px 30px 0px 30px;
`

export const ScheduleLabel = styled(FollowUpLabel)`
    margin: 15px 55px;
`

export const SpeedLabel = styled(FollowUpLabel)`
    margin: 15px 0px 15px 55px;
`