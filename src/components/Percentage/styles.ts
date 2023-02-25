import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  height: 200px;
  padding: 24px;

  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};

  align-items: center;
  padding-top: 40px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
  font-size: 32px;
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
  font-size: 14px;
`;