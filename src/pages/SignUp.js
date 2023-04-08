import styled from "styled-components";
import Icon from "../components/Icon";
import Input from "../components/Input";
import Button from "../components/Button";
import { useEffect, useState } from "react";
import { signUp } from "../services/userAPI";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignUp() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [numberPhone, setNumberPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function register(e) {
    e.preventDefault();

    if (name === "" || numberPhone === "" || email === "" || password === "") {
      return toast.error("Preencha os campos!");
    }

    const body = {
      email,
      password,
      name,
      numberPhone,
    };

    signUp(body)
      .then((res) => {
        navigate("/sign-in");
        toast.success("Cadastro realizado com sucesso!");
      })
      .catch((e) => {
        toast.error("Erro no cadastro");
      });
  }

  return (
    <Screen>
      <Icon />
      <BoxInput onSubmit={register} autoComplete="off">
        <Input placeholder="Nome" type="text" setValue={setName} value={name} />
        <Input
          placeholder="Celular"
          type="number"
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
        <Button submit="submit" name="Cadastrar-se" />
      </BoxInput>
      <ToastContainer />
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

  gap: 10px;
  width: 80%;

  transition: all 1.5s ease 0s;

  @media (min-width: 480px) {
    width: 400px;

    input {
      font-size: 22px;
    }
  }
`;
