import styled from 'styled-components/native';
import { ArrowLeft } from "phosphor-react-native";


export const Container = styled.View`
justify-content: center;

`;

export const ButtonIcon = styled.TouchableOpacity`

`;

export const Icon = styled(ArrowLeft).attrs(({ theme }) => ({
    size: 24,
    color: theme.COLORS.GRAY_200
}))`
margin-left: 24px;
margin-top: 56px;
`;

export const ContainerTitle = styled.View`
    width: 100%;
    height: 132px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_600};
    flex-direction: row;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_S}px;
`;
export const ContentTitle = styled.View`
    justify-content: center;
    margin-left: 90px;
 
`;


export const ContainerBody = styled.View`
margin-top: 40px;
margin-right: 24px;
margin-left: 24px;

`;

