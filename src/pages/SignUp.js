import styled from "styled-components";
import Icon from "../components/Icon";
import Input from "../components/Input";
import ButtonRegister from "../components/Button-register";
export default function SignUp() {
  function clique() {
    alert("Click!");
  }

  return (
    <Screen>
      <Icon />
      <BoxInput>
        <Input placeholder="Nome" type="text" />
        <Input placeholder="Celular" type="text" />
        <Input placeholder="E-mail" type="email" />
        <Input placeholder="Senha" type="password" />
        <ButtonRegister onClick={clique} name="Cadastrar-se" />
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

  gap: 10px;
`;
