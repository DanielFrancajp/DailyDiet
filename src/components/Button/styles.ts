import styled from "styled-components/native";
import { TouchableOpacity } from 'react-native'

export const Container = styled(TouchableOpacity)`

    flex:1;

    min-height: 56px;
    max-height: 56px;
    margin-left: 24px;
    margin-right: 24px;
    border-radius: 12px;
    align-items: center;
    justify-content: center;
    background-color: ${({theme})=> theme.COLORS.GRAY_200};
`;

export const Title = styled.Text`
    color: ${({theme})=> theme.COLORS.WHITE};
    font-size: ${({theme})=>theme.FONT_SIZE.TITLE_S}px;
`;
