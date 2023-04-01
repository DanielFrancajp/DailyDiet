import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";



export const Container = styled(TouchableOpacity) `
    flex: 1;
    min-height: 56px;
    max-height: 56px;
    border-radius: 6px;
    align-items: center;
    justify-content: center;
    background-color: ${({theme})=> theme.COLORS.GRAY_600};
    
`;
export const Title = styled.Text`
${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.TITLE_XS}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color:     ${theme.COLORS.GRAY_100};
`}
`;