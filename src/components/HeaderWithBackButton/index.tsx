import { ReactNode } from "react";
import { useNavigation } from "@react-navigation/native";

import { BackButton } from "../BackButton";

import { Container } from "./styles";

interface Props {
  children: ReactNode

  type: 'NEUTRAL' | 'PRIMARY' | 'SECONDARY';
}

export function HeaderWithBackButton({ children, type }: Props) {
  const { goBack } = useNavigation();

  return (
    <Container>
      <BackButton
        icon='arrow-left'
        type={type}
        style={{ position: 'absolute', left: 12, top: 12 }}
        onPress={() => goBack()}
      />
      {children}
    </Container>
  )
}