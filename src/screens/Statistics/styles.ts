import styled from 'styled-components/native';
import { ArrowLeft } from "phosphor-react-native";


export const Container = styled.View`
flex: 1;
   justify-content: center;
   align-items: center;
   margin-top: -20px;

`;

export const ContainerStatistics = styled.View`
    width: 100%;
    height: 200px;
    background-color: ${({ theme }) => theme.COLORS.BRAND_GREEN_MID};
`;

export const ButtonIcon = styled.TouchableOpacity`

`;

export const Icon = styled(ArrowLeft).attrs(({ theme }) => ({
    size: 24,
    color: theme.COLORS.BRAND_GREEN_LIGHT
}))`
margin-left: 27px;
margin-top: 61px;
`;

export const ContentTitle = styled.View`
    justify-content: center;
    align-items: center;
    
`;


export const TitleResults = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_G}px;
`;

export const SubTitleResults = styled.Text`
text-align: center;
    font-size: ${({ theme }) => theme.FONT_SIZE.BODY_S}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

export const Title = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_XS}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    text-align: center;
`;


export const ContentGeneral = styled.View`
width: 100%;
flex: 1;
background-color: #fff;
padding-top: 20px;
margin-top: -30px;
border-top-right-radius: 20px;
border-top-left-radius: 20px;
`;

export const BoxGray600 = styled.View`
    width: 327px;
    height: 89px;
    margin-top: 25px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_600};
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    
`;

export const BoxGreenMid = styled.View`
    width: 157.5px;
    height: 107px;
    margin-top:25px;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.BRAND_GREEN_MID};
`;

export const BoxRedMid = styled.View`
    width: 157.5px;
    height: 107px;
    margin-top:25px;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.BRAND_RED_MID};
`;

export const ContentBoxColors = styled.View`
    flex-direction: row;
    margin-right: 30px;
    margin-left: 30px;
    justify-content: space-between;
`;

