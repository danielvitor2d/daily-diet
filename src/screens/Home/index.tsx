import { useNavigation } from "@react-navigation/native";

import { Meals } from "../../components/Meals";
import { Header } from "../../components/Header";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Infographic } from "../../components/Infographic";

import { Container, Title } from "./styles";

export function Home() {
  const { navigate } = useNavigation();

  return (
    <Container>
      <Header />

      <Infographic />

      <Title>
        Refeições
      </Title>

      <ButtonIcon
        icon='add'
        onPress={() => navigate('manage-meal', { mode: 'create' })}
        style={{ marginBottom: 10 }}
        title='Nova refeição'
      />

      <Meals />
    </Container>
  )
}