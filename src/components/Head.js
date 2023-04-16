import styled from "styled-components";
import { IoCalendar } from "react-icons/io5";

export default function Head({ value, setValue }) {
  function handleInput(e) {
    setValue(e.target.value);
  }

  return (
    <Wrapper>
      <Title>{value ? value : "Today"}</Title>
      <IoCalendar size="40px" />
      <Input type="date" onChange={handleInput} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;

  position: relative;
`;

const Title = styled.h2`
  font-size: 25px;
  font-weight: bold;

  width: 55%;
  text-align: end;
`;

const Input = styled.input`
  width: 35px;
  height: 35px;
  background-color: yellow;
  opacity: 0;
  position: absolute;
  top: 0px;
  right: 3px;
`;
