import styled, { css } from 'styled-components/native';
import { TextInput } from 'react-native';

export const Container = styled(TextInput)`
   
   ${({ theme }) => css`
   border: 1px  ;
   border-color: ${({theme})=> theme.COLORS.GRAY_400};
   font-size: ${theme.FONT_SIZE.BODY_M}px;
   font-family: ${theme.FONT_FAMILY.REGULAR};
   
   
   `}
   border-radius: 6px;
   padding:16px;
   height: 120px
`;

