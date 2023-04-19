import styled from "styled-components";

export default function Button({ submit, name }) {
  return <Screen submit={submit}>{name}</Screen>;
}

const Screen = styled.button`
  padding: 10px;
  height: 40px;
  width: 100%;
  border-radius: 15px;
  background-color: black;
  color: white;
  font-weight: bold;
  cursor: pointer;

  transition: all 0.2s ease-out;

  &:hover {
    color: rgb(220, 220, 220);
    box-shadow: 0px 0px 3.8px black;
  }

  @media (min-width: 480px) {
    font-size: 18px;
  }
`;
