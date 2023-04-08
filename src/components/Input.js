import styled from "styled-components";

export default function Input({ placeholder, type, setValue, value }) {
  return (
    <Wrapper>
      <Screen
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      ></Screen>
    </Wrapper>
  );
}

// const Key = keyframes`
//   0%{
//     rotate: 0deg;
//   }
//   100%{
//     rotate: 360deg;
// }
// `;

const Wrapper = styled.div``;

const Screen = styled.input`
  padding: 10px;
  height: 40px;
  width: 100%;

  border-bottom: 1px solid transparent;

  transition: all 1.5s ease 0s;
  text-align: center;
  font-style: italic;

  &:focus {
    border-bottom: 1px solid rgb(150, 150, 150);
  }
  &:-webkit-autofill {
    background-color: transparent !important;
  }
`;
