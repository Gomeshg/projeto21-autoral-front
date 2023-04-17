import styled from "styled-components";

export default function LineButton({}) {
  function click() {
    alert("Clicou");
  }

  return <Button onClick={click}>+</Button>;
}

const Button = styled.button`
  width: 50px;
  height: 50px;

  border-radius: 50%;

  background-color: black;
  border: 2.5px double rgb(100, 100, 100);
  color: rgb(215, 215, 215);
  font-size: 35px;

  position: absolute;
  left: calc(50% - 25px);
  bottom: 0px;
  transition: all 0.3s ease-out;

  &:active {
    width: 51px;
    height: 51px;
    font-size: 35.5px;

    transition: all 0.3s ease-out;
  }
`;
