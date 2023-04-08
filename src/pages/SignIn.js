import styled from "styled-components";
import Icon from "../components/Icon";
import Input from "../components/Input";
import ButtonRegister from "../components/Button";
import { useState } from "react";
import { useSession } from "../services/session";

export default function SignIn() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const { setSession } = useSession();

  function signIn(e) {
    e.preventDefault();

    // const session = {};
    // setSession(session);
    // localStorage.setItem("session", JSON.stringify(session));
  }

  return (
    <Screen>
      <Icon />
      <BoxInput onSubmit={signIn}>
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

const BoxInput = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;

  gap: 10px;
`;
