import styled from "styled-components";
import { useState, useEffect } from "react";

export default function Confirm({ confirm, setConfirm, setResponseConfirm }) {
  const [stepOne, setStepOne] = useState(false);
  const [stepTwo, setSteptwo] = useState(false);

  function crashConfirm() {
    setConfirm(false);
    setSteptwo(false);
    setTimeout(() => {
      setStepOne(false);
    }, 300);
  }

  function openConfirm() {
    if (confirm) {
      setStepOne(true);
      setTimeout(() => {
        setSteptwo(true);
      }, 300);
    }
  }

  function clickOk() {
    setResponseConfirm(true);
    crashConfirm();
    setTimeout(() => {
      setResponseConfirm(false);
    }, 1000);
  }

  function clickCancel() {
    crashConfirm();
  }

  useEffect(() => {
    openConfirm();
  }, [confirm]);

  return (
    <Wrapper>
      <Background onClick={crashConfirm} className={stepOne && !stepTwo ? "background" : stepOne && stepTwo ? "background show" : ""} />
      <Content className={stepOne && !stepTwo ? "confirm" : stepOne && stepTwo ? "confirm show" : ""}>
        <Text>Você tem certeza que deseja excluir ?</Text>
        <BoxButton>
          <Button onClick={clickOk}>Ok</Button>
          <Button onClick={clickCancel}>Cancelar</Button>
        </BoxButton>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .background {
    height: 100vh;
  }

  .confirm {
    height: 30vh;
    @media (min-width: 1040px) {
      height: 50vh;
      width: 30%;
      left: 35%;
    }
  }

  .show {
    opacity: 1;
  }
`;

const Background = styled.div`
  height: 0vh;

  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  opacity: 0;

  transition: all 0.3s ease-out 0.1s;
`;

const Content = styled.div`
  height: 0vh;
  width: 80%;
  overflow: scroll;
  background-color: rgb(200, 200, 200);

  border-radius: 15px;
  z-index: 2;

  position: fixed;
  top: 25vh;
  left: 10%;

  opacity: 0;

  transition: all 0.3s ease-out 0.1s;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const Text = styled.p`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

const BoxButton = styled.div`
  display: flex;
  gap: 50px;

  button:nth-child(1) {
    border: 2px solid white;
    background-color: black;
    color: white;
  }
  button:nth-child(2) {
    border: 2px solid black;
    background-color: white;
    color: black;
  }
`;

const Button = styled.button`
  width: 100px;
  height: 50px;
  border-radius: 10px;
  font-weight: bold;
`;
