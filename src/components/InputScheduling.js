import styled from "styled-components";

export default function InputScheduling({ id, label, type, setValue, value }) {
  return (
    <Wrapper>
      <Label for={id}>{label}</Label>
      <Input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      ></Input>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Label = styled.label`
  font-weight: bold;
  transform: translateX(5px);
`;

const Input = styled.input`
  padding: 10px;
  height: 40px;
  width: 100%;

  border-radius: 10px;
`;
