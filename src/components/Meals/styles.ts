import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

type Prop = {
  status: boolean
}

export const Container = styled.View`
  width: 100%;
`;

export const ItemContainer = styled(TouchableOpacity)`
  flex-direction: row;
  
  align-items: center;
  justify-content: space-between;

  max-height: 49px;
  padding: 14px;

  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  
`;

export const ItemHour = styled.Text`
   ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `};

  font-size: 12px;
`;

export const ItemTitle = styled.Text`
   ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
  `};

  flex: 1;

  max-width: 217px;

  font-size: 16px;
`;

export const ItemStatus = styled.View <Prop>`
  height: 14px;
  width: 14px;

  border-radius: 7px;
  background-color: ${({ theme, status }) => status === false ? theme.COLORS.RED_MID : theme.COLORS.GREEN_MID};
`;

export const HeaderContainer = styled.View`
  margin-top: 25px;
  margin-bottom: 10px;
`;

export const SectionHeaderTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `};

  font-size: 18px;
`;
