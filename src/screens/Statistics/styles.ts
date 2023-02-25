import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native';

export type StatisticsTypeStyleProps = 'NEUTRAL' | 'PRIMARY' | 'SECONDARY';

interface Prop {
  type: StatisticsTypeStyleProps
}

interface DataProps {
  direction: 'row' | 'column',
}

export const Container = styled(SafeAreaView) <Prop>`
  ${({ theme, type }) => css`
    background-color:
    ${type === 'NEUTRAL' 
      ? theme.COLORS.GRAY_500
      : type === 'PRIMARY'
        ? theme.COLORS.GREEN_LIGHT
        : theme.COLORS.RED_LIGHT
    };
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};

  width: 100%;
  height: 100%;
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

export const Content = styled.View`
  flex: 1;
  width: 100%;

  padding: 24px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  align-items: center;
  justify-content: flex-start;
`;

export const PageTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `};
  
  font-size: 14px;

  margin-bottom: 10px;
`;

export const Data = styled.View <DataProps>`
  width: 100%;

  margin-top: 15px;

  flex-direction: ${({ direction }) => direction};
  justify-content: space-between;
`;