import { Feather } from '@expo/vector-icons';
import { TouchableOpacityProps } from 'react-native';

import { Container, Icon, Title } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  icon?: keyof typeof Feather.glyphMap;
  type?: 'PRIMARY' | 'SECONDARY'
}

export function ButtonWithIcon({ title, icon, type = 'PRIMARY', ...rest }: Props) {
  return (
    <Container
      {...rest}
      type={type}
    >
      {
        icon &&
        <Icon name={icon} type={type} />
      }
      <Title type={type}>
        {title}
      </Title>
    </Container>
  )
}