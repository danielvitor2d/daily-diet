import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native';

interface TextProps {
  isPositiveFeedback: boolean
}

export const Container = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  
  height: 100%;
  width: 100%;
  
  padding: 24px;
`;

export const Content = styled.View`
  height: 100%;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
`;

export const TextContainer = styled.View`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text<TextProps>`
  ${({ theme, isPositiveFeedback }) => css`
    color: ${isPositiveFeedback ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
  
  font-size: 24px;
  text-align: center;
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};

  font-size: 16px;
  text-align: center;
`;

export const FeedbackImage = styled.Image`
  margin-top: 30px;
  margin-bottom: 30px;
`;