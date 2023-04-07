import styled from "styled-components";

export default function Input({ placeholder, type }) {
  return <Screen placeholder={placeholder} type={type}></Screen>;
}

const Screen = styled.input`
  padding: 10px;
  height: 40px;
  width: 400px;
  border-radius: 15px;
  border: 1px solid gray;
  box-shadow: 0px 0px 1.5px black;
  &:hover {
    box-shadow: 0px 0px 3.8px black;
  }
`;
