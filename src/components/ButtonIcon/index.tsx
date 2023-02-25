import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacityProps } from 'react-native';

import { Container, Title, Icon } from "./styles";

interface Props extends TouchableOpacityProps {
  icon?: keyof typeof MaterialIcons.glyphMap
  title: string
}

export function ButtonIcon({ title, icon, ...rest }: Props) {
  return (
    <Container
      activeOpacity={0.8}
      {...rest}
    >
      {icon && (<Icon name={icon} />)}

      <Title>
        {title}
      </Title>
    </Container>
  )
}