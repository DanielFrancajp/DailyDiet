import { Circle } from "phosphor-react-native";
import styled from "styled-components/native";

export const Container = styled.View`
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    justify-content: space-between;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({ theme }) => theme.FONT_SIZE.BODY_M}px;
`;

export const ContentTitle = styled.View`
    margin-left: 24px;
    margin-bottom: 12px;
`;

export const Dates = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_S}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const ContentDates = styled.View`
    margin-left: 24px;
    margin-top: 32px;
    margin-bottom: 12px;
`;

export const Icon = styled(Circle).attrs(({ theme }) => ({
    size: 24,
    color: theme.COLORS.BRAND_GREEN_LIGHT
}))``;