import { Container, Logo } from "./styles";

import logoImg from "../../assets/logo.png";

import { Avatar } from "../Avatar";

export function Header() {
  return (
    <Container>
      <Logo source={logoImg} />

      <Avatar />

    </Container>
  )
}