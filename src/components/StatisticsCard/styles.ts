import styled, { css } from 'styled-components/native';

export type CardType = 'FULL' | 'HALF';
export type CardVariant = 'NEUTRAL' | 'PRIMARY' | 'SECONDARY';

type Props = {
  type: CardType;
  variant: CardVariant;
}

export const Container = styled.TouchableOpacity <Props>`
  width: ${({ type }) => type === 'FULL' ? 100 : 48}%;

  padding: 20px 15px;

  align-items: center;
  justify-content: center;

  background-color: 
  ${({ theme, variant }) => variant === 'NEUTRAL' 
    ? theme.COLORS.GRAY_600 
    : variant === 'PRIMARY' 
      ? theme.COLORS.GREEN_LIGHT
      : theme.COLORS.RED_LIGHT
  };

  border-radius: 8px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};

  font-size: 24px;

  text-align: center;
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};

  font-size: 14px;

  text-align: center;
`;