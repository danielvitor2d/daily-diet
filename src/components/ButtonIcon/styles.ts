import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import styled, { css } from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
  flex-direction: row;

  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 50px;
  max-height: 50px;

  border-radius: 6px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.WHITE,
}))`
  margin-right: 5px;
`;