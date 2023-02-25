import { Feather } from '@expo/vector-icons'; 
import { Text, TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

type Props = {
  onTheDiet: boolean
}

export const Container = styled(TouchableOpacity) <Props>`
  width: 100%;

  margin-top: 30px;
  padding-top: 20px;
  padding-bottom: 20px;

  border-radius: 8px;
  background-color: ${({ theme, onTheDiet }) => onTheDiet 
    ? theme.COLORS.GREEN_LIGHT 
    : theme.COLORS.RED_LIGHT
  };

  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};

  font-size: 32px;
`;

export const Subtitle = styled(Text)`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};

  font-size: 14px;
`;

export const Icon = styled(Feather).attrs<Props>(({ theme, onTheDiet }) => ({
  size: 26,
  color: onTheDiet
    ? theme.COLORS.GREEN_DARK
    : theme.COLORS.RED_DARK,
  name: 'arrow-up-right'
}))`
  position: absolute;
  right: 10px;
  top: 10px;
`;