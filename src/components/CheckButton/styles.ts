import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { Circle } from "phosphor-react-native";


export type CircleTypeProps = ' PRIMARY' | 'SECONDARY';

type Props = {
    type: CircleTypeProps
}

export const Container = styled(TouchableOpacity)`
    min-height: 56px;
    max-height: 56px;
    width: 45%;
    border-radius: 6px;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.GRAY_600};
    
`;
export const Title = styled.Text`
${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.TITLE_XS}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color:     ${theme.COLORS.GRAY_100};
`}
`;
export const Icon = styled(Circle).attrs(({ theme }) => ({
    size: 8,
    color: theme.COLORS.BRAND_GREEN_LIGHT,
    weight: "fill",
    
}))`
padding-left: 20px;
`;

export const Icon1 = styled(Circle).attrs(({ theme }) => ({
    size: 8,
    color: theme.COLORS.BRAND_RED_DARK,
    weight: "fill",
}))`
`;