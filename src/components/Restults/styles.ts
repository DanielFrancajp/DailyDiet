import styled from "styled-components/native";

export const Container = styled.View`
    margin-left: 24px;
    margin-right: 24px;
    margin-top: 32px;
    padding-bottom: 52px ;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.BRAND_GREEN_MID};
`;



export const TitleResults = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_G}px;
`;

export const SubTitleResults = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({ theme }) => theme.FONT_SIZE.BODY_S}px;
`;