import { useEffect } from "react";
import styled from "styled-components";

export default function Select({ value, id, label, hashValues, setValue }) {
  const arrayValues = [];
  for (const key in hashValues) {
    arrayValues.push({ key, value: hashValues[key] });
  }

  useEffect(() => {
    setValue(arrayValues[0].key);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleSelect(e) {
    setValue(e.target.value);
  }

  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>

      <Selected value={value} id={id} name={id} onChange={handleSelect}>
        {arrayValues.map((item, index) => (
          <Option value={item.key} key={index}>
            {item.value}
          </Option>
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
