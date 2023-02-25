import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native';

export type StatisticsTypeStyleProps = 'NEUTRAL' | 'PRIMARY' | 'SECONDARY';

interface Prop {
  type: StatisticsTypeStyleProps
}

interface FormProps {
  direction: 'VERTICAL' | 'HORIZONTAL'
}

interface ContainerInputProp {
  variant: 'HALF' | 'FULL'
}

interface StatusProps {
  type: 'PRIMARY' | 'SECONDARY'
}

interface TextFieldProps {
  variant: 'NORMAL' | 'LARGER'
}

interface ButtonFieldProps {
  type: 'PRIMARY' | 'SECONDARY'
  isSelected: boolean
}

export const Container = styled(SafeAreaView) <Prop>`
  ${({ theme, type }) => css`
    background-color: ${type === 'NEUTRAL' 
      ? theme.COLORS.GRAY_500
      : type === 'PRIMARY'
        ? theme.COLORS.GREEN_LIGHT
        : theme.COLORS.RED_LIGHT};
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

export const Fields = styled.View <FormProps>`
  width: 100%;

  flex-direction: ${({ direction }) => direction === 'HORIZONTAL' ? 'row' : 'column' };

  justify-content: space-between;
  align-items: flex-end;
`;

export const InputContainer = styled.View <ContainerInputProp>`
  width: ${({ variant }) => variant === 'FULL' ? 100 : 48}%;

  margin-top: 15px;
`;

export const TitleField = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};

  margin-bottom: 5px;

  font-size: 14px;
  text-align: left;
`;

export const InputField = styled.TextInput.attrs(({ theme }) => ({
  cursorColor: theme.COLORS.GRAY_300,
  inputMode: 'text',
}))<TextFieldProps>`
  height: ${({ variant }) => variant === 'NORMAL' ? 49 : 144 }px;

  padding: 10px;

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;
`;

export const StatusButton = styled.View <StatusProps>`
  height: 8px;
  width: 8px;

  border-radius: 4px;
  margin-right: 10px;

  background-color: ${({ theme, type }) => 
    type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
  };
`;

export const TextButton = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `};

  font-size: 14px;
  
  text-align: center;
`;

export const ButtonField = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.5,
}))<ButtonFieldProps>`
  ${({ theme, type, isSelected }) => css`
    background-color: ${
      isSelected
        ? type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT
        : theme.COLORS.GRAY_600
    };
    border: 1px solid ${
      isSelected
        ? type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
        : theme.COLORS.GRAY_600
    };
  `};

  border-radius: 6px;
  padding: 15px 0px;

  align-items: center;
  justify-content: center;
  flex-direction: row;
`;