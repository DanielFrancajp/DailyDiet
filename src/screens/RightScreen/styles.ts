import styled from "styled-components/native";

export const Container = styled.View`

    flex: 1;
    align-items: center;
    justify-content: center;
    margin-left: 32px;
    margin-right: 32px;
`;

export const TextTitle = styled.Text`

    color: ${({ theme }) => theme.COLORS.BRAND_GREEN_LIGHT};
    font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_M}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const Text = styled.Text`

    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_XS}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    margin-top: 10px;

`;
export const TextBold = styled.Text`

    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_XS}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const ContentImage = styled.View`
margin-top: 40px;

`;
export const ContentButton = styled.View`
margin-top: 40px;
width: 191px;
height: 50px;
`;