import { ArrowUpRight } from "phosphor-react-native";
import styled from "styled-components/native";

export const Container = styled.View`
    margin-left: 24px;
    margin-right: 24px;
    margin-top: 32px;
    margin-bottom: 40px;
    padding-bottom: 30px ;
    border-radius: 15px;
    align-items: center;
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

export const Icon = styled(ArrowUpRight).attrs(({ theme }) => ({
    size: 24,
    color: theme.COLORS.BRAND_GREEN_LIGHT
}))`
margin-top: 10px;
margin-left: 300px`;