import styled from "styled-components";
import Icon from "../components/Icon";
import Input from "../components/Input";
import ButtonRegister from "../components/Button-register";

export default function SignIn() {
  return (
    <Screen>
      <Icon />
      <BoxInput>
        <Input placeholder="E-mail" type="email" />
        <Input placeholder="Senha" type="password" />
        <ButtonRegister name="Login" />
      </BoxInput>
    </Screen>
  );
}

const Screen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BoxInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;

  gap: 10px;
`;
