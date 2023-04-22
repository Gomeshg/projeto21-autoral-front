import styled, { keyframes } from "styled-components";
import { useState } from "react";

export default function LineButton({ setScheduling }) {
  const [click, setClick] = useState(false);
  function clickButton() {
    setClick(true);
    setScheduling(true);
    setTimeout(() => {
      setClick(false);
    }, 1000);
  }

  return (
    <Wrapper>
      <Button onClick={clickButton} className={click ? "click" : ""}>
        +
      </Button>
    </Wrapper>
  );
}

const Shake = keyframes`

  0% { transform: rotate(0deg); }
  10% { transform: rotate(-10deg); }
  20% { transform: rotate(10deg); }
  30% { transform: rotate(-10deg); }
  40% { transform: rotate(10deg); }
  50% { transform: rotate(-10deg); }
  60% { transform: rotate(10deg); }
  70% { transform: rotate(-10deg); }
  80% { transform: rotate(10deg); }
  90% { transform: rotate(-10deg); }
  100% { transform: rotate(0deg); }
`;
const Wrapper = styled.div`
  position: absolute;
  left: calc(50% - 25px);
  bottom: -5px;

  .click {
    animation: ${Shake} 0.8s ease-in-out;
  }
`;

const Button = styled.button`
  width: 50px;
  height: 50px;

  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: black;
  border: 2.5px double rgb(100, 100, 100);
  color: rgb(255, 255, 255);
  font-size: 35px;
`;
