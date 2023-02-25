import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

type Props = {
  type: 'PRIMARY' | 'SECONDARY';
}

export const Container = styled.TouchableOpacity<Props>`
  ${({ theme, type}) => css`
    border: ${type === 'PRIMARY' ? 0 : '1px solid ' + theme.COLORS.GRAY_100};
    background-color: ${type === 'PRIMARY' ? theme.COLORS.GRAY_200 : theme.COLORS.WHITE};
  `};

  width: 100%;
  min-height: 50px;
  max-height: 50px;

  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;

  border-radius: 6px;
`;

export const Title = styled.Text<Props>`
  ${({ theme, type }) => css`
    color: ${type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};

  font-size: 14px;
`;

export const Icon = styled(Feather).attrs<Props>(({ theme, type }) => ({
  size: 24,
  color: type === 'PRIMARY'
    ? theme.COLORS.WHITE
    : theme.COLORS.GRAY_100
}))`
  margin-right: 5px;
`;