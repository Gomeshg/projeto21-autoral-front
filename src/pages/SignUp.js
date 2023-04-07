import styled from "styled-components";
import Icon from "../components/Icon";
import Input from "../components/Input";
import ButtonRegister from "../components/Button-sign";
import { useState } from "react";
import { signUp } from "../services/userAPI";

export default function SignUp() {
  const [name, setName] = useState(null);
  const [numberPhone, setNumberPhone] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  function signUp(e) {
    e.preventDefault();
    // signUp(email, password, name, numberPhone).then(res => {

    // }).catch(e => {

    // })
    console.log(process.env.REACT_APP_API_BASE_URL);
  }
  return (
    <Screen>
      <Icon />
      <BoxInput onSubmit={signUp}>
        <Input placeholder="Nome" type="text" setValue={setName} value={name} />
        <Input
          placeholder="Celular"
          type="text"
          setValue={setNumberPhone}
          value={numberPhone}
        />
        <Input
          placeholder="E-mail"
          type="email"
          setValue={setEmail}
          value={email}
        />
        <Input
          placeholder="Senha"
          type="password"
          setValue={setPassword}
          value={password}
        />
        <ButtonRegister name="Cadastrar-se" />
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

const BoxInput = styled.form`
  display: flex;
  flex-direction: column;

  width: 80%;
  gap: 10px;
`;
