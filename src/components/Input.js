import styled from "styled-components";

export default function Input({ placeholder, type, setValue, value }) {
  return (
    <Screen
      autoComplete="new-password"
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    ></Screen>
  );
}

const Screen = styled.input`
  padding: 10px;
  height: 40px;
  width: 100%;

  border-bottom: 1px solid transparent;

  transition: all 1.5s ease 0s;

  &::placeholder {
    text-align: center;
    color: rgba(0, 0, 0, 0.3);
    font-style: italic;
  }
  &:focus {
    border-bottom: 1px solid rgb(150, 150, 150);
  }
  &:-webkit-autofill {
    background-color: white !important;
  }
`;
