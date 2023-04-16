import styled from "styled-components";
import Icon from "../components/Icon";
import Input from "../components/Input";
import Button from "../components/Button";
import { useState } from "react";
import { useSession } from "../services/session";
import { signIn } from "../services/userAPI";
import { useNavigate, Link } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setSession } = useSession();
  const navigate = useNavigate();

  function login(e) {
    e.preventDefault();

    if (email === "" || password === "") {
      return toast.error("Preencha os campos!");
    }
    const body = {
      email,
      password,
    };
    signIn(body)
      .then((res) => {
        const session = {
          token: res.data.token,
          userId: res.data.userId,
        };
        setSession(session);
        localStorage.setItem("session", JSON.stringify(session));
        toast.success("Login realizado com sucesso!");
        navigate("/dashboard");
      })
      .catch((err) => {
        toast.error("Login inválido!");
      });
  }

  return (
    <Screen>
      <Icon />
      <BoxInput onSubmit={login} autoComplete="off">
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
        <Button submit="submit" name="Entrar" />
      </BoxInput>
      <ToastContainer />
      <Link to="/">Não possui uma conta?</Link>
    </Screen>
  );
}

const Screen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const BoxInput = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;

  gap: 10px;

  transition: all 1.5s ease 0s;

  @media (min-width: 480px) {
    width: 400px;

    input {
      font-size: 22px;
    }
  }
`;
