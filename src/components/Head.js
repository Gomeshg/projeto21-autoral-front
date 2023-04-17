import styled from "styled-components";
import { IoCalendar } from "react-icons/io5";
import { getLine } from "../services/lineAPI";
import { useSession } from "../services/session";

export default function Head({ date, setDate }) {
  const { session } = useSession();

  function handleInput(e) {
    setDate(e.target.value);
  }

  return (
    <Wrapper>
      <div></div>
      <Title>{date ? date : "Today"}</Title>
      <BoxInput>
        <IoCalendar className="icon" size="35px" />
        <Input type="date" onChange={handleInput} />
      </BoxInput>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;

  position: relative;
`;

const Title = styled.h2`
  font-size: 25px;
  font-weight: bold;

  text-align: center;
`;

const BoxInput = styled.div`
  display: flex;
  justify-content: end;
  transition: all 0.5s ease-out;

  &:active {
    .icon {
      transition: all 0.1s ease-out;
      transform: translateX(-1px);
    }
  }
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
