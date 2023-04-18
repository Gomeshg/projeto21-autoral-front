import { useRef } from "react";
import styled from "styled-components";

export default function Select({ id, label, hashValues, setValue }) {
  const arrayValues = [];
  for (const key in hashValues) {
    arrayValues.push({ key, value: hashValues[key] });
  }

  function handleSelect(e) {
    setValue(e.target.value);
  }
  return (
    <Wrapper>
      <Label for={id}>{label}</Label>
      <Selected id={id} name={id} onChange={handleSelect}>
        {arrayValues.map((item) => (
          <Option value={item.key}>{item.value}</Option>
        ))}
      </Selected>
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

const Selected = styled.select`
  padding: 10px;
  height: 40px;
  width: 100%;

  border-radius: 10px;
`;

const Option = styled.option``;
