import styled from "styled-components/native";

export const Container = styled.View`
    margin-left: 24;
    margin-right: 24;
    margin-top: 66;
    flex-direction: row;
    justify-content: space-between;    
`;

export const UserInfo = styled.View`
color: ${({ theme }) => theme.COLORS.GRAY_200};
border: 1px solid;
`;