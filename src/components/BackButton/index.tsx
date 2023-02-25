import { TouchableOpacityProps } from "react-native";
import { Feather } from '@expo/vector-icons';

import { ButtonIconTypeStyleProps, Container, Icon } from "./styles";

type Props = TouchableOpacityProps & {
  icon: keyof typeof Feather.glyphMap
  type?: ButtonIconTypeStyleProps
}

export function BackButton({ icon, type, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Icon
        name={icon}
        type={type}
      />
    </Container>
  )
}