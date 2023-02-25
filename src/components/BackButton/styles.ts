import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export type ButtonIconTypeStyleProps = 'NEUTRAL' | 'PRIMARY' | 'SECONDARY';

type Props = {
  type: ButtonIconTypeStyleProps;
}

export const Container = styled(TouchableOpacity)``;

export const Icon = styled(Feather).attrs<Props>(({ theme, type }) => ({
  size: 24,
  color: type === 'NEUTRAL' 
    ? theme.COLORS.GRAY_200 : 
    type === 'PRIMARY'
      ? theme.COLORS.GREEN_DARK 
      : theme.COLORS.RED_DARK,
}))``;