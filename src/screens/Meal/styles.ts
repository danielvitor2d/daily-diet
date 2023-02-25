import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native';

interface ContainerProps {
  isOnTheDiet: boolean
}

interface TagStatusProps {
  isOnTheDiet: boolean
}

export const Container = styled(SafeAreaView)<ContainerProps>`
  background-color: ${({ theme, isOnTheDiet }) => 
    isOnTheDiet ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT
  };

  width: 100%;
  height: 100%;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};

  font-size: 18px;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;

  padding: 20px 24px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  
  align-items: center;
  justify-content: space-between;
`;

export const Info = styled.View`
  flex: 1;
  display: flex;
  align-items: flex-start;

  width: 100%;
  height: 100%;
`;

export const MealContainer = styled.View`
  display: flex;
  flex-direction: column;

  margin-top: 20px;
`;

export const MealTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `};

  font-size: 20px;
`;

export const MealDescription = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
  `};

  font-size: 16px;

  margin-top: 5px;
`;

export const DateAndHourContainer = styled.View`
  display: flex;
  flex-direction: column;

  margin-top: 20px;
`;

export const DateAndHourTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `};

  font-size: 14px;
`;

export const DateAndHourDescription = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
  `};

  font-size: 16px;

  margin-top: 5px;
`;

export const TagContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 10px 15px;
  margin-top: 20px;

  border-radius: 20px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const TagStatus = styled.View <TagStatusProps>`
  height: 8px;
  width: 8px;

  border-radius: 4px;
  margin-right: 8px;

  background-color: ${
    ({ theme, isOnTheDiet }) => isOnTheDiet === false 
      ? theme.COLORS.RED_DARK
      : theme.COLORS.GREEN_DARK
  };
`;

export const TagTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_100};
  `};

  font-size: 14px;

  width: auto;
`;

export const EditMealButtonContainer = styled.View`
  width: 100%;
`;

export const DeleteMealButtonContainer = styled.View`
  width: 100%;

  margin-top: 10px;
`;