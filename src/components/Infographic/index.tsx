import { useState } from "react";

import { useNavigation } from "@react-navigation/native";

import { Container, Icon, Subtitle, Title } from "./styles";

export function Infographic() {
  const { navigate } = useNavigation();

  const [onTheDiet] = useState(true);
  
  return (
    <Container
      onTheDiet={onTheDiet}
      activeOpacity={0.7}
      onPress={() => navigate('statistics')}
    >
      <Icon
        onTheDiet={onTheDiet}
      />

      <Title>
        {'90,86%'}
      </Title>

      <Subtitle>
        {'das refeições dentro da dieta'}
      </Subtitle>
    </Container>
  )
}