import styled, { css } from 'styled-components/native';
import { TextInput } from 'react-native';

export const Container = styled(TextInput)`
   
   ${({ theme }) => css`
   color: "#000000";
   border-color:${theme.COLORS.GRAY_400};
   border: 1px  ;
   font-size: ${theme.FONT_SIZE.BODY_M}px;
   font-family: ${theme.FONT_FAMILY.REGULAR};
   
   `}

   flex:1;
   min-height:56px;
   max-height: 56px;
   border-radius: 6px;
   padding:16px;
`;

