import { TouchableOpacityProps } from "react-native";

import {
  CardType,
  CardVariant,
  Container,
  Subtitle,
  Title,
} from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  subtitle: string;
  type: CardType;
  variant: CardVariant;
}

export function StatisticsCard({ title, subtitle, type, variant, ...rest }: Props) {
  return (
    <Container
      activeOpacity={0.7} 
      variant={variant}
      type={type}
      {...rest}
    >
      <Title>
        {title}
      </Title>

      <Subtitle>
        {subtitle}
      </Subtitle>

    </Container>
  )
}