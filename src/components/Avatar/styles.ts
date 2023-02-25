import styled from 'styled-components/native';

export const Container = styled.View`
  width: 40px;
  height: 40px;

  border-width: 2px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_200};
  border-style: solid;
  border-radius: 100px;
`;