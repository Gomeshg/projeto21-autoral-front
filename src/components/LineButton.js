import styled from "styled-components";

export default function LineButton({}) {
  function click() {}

  return <Button>+</Button>;
}

const Button = styled.button`
  width: 50px;
  height: 50px;

  border-radius: 50%;

  background-color: black;
  color: white;
  font-size: 35px;
`;
