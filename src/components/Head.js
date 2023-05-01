import styled, { keyframes } from "styled-components";
import { IoCalendar } from "react-icons/io5";
import { BsBoxArrowInLeft } from "react-icons/bs";
import { useSession } from "../services/session";

import { useState } from "react";
import Date from "./DateTitle";
import { useNavigate } from "react-router-dom";

export default function Head({ date, setDate }) {
  const { setSession } = useSession();
  const navigate = useNavigate();
  const [clickCalendar, setClickCalendar] = useState(false);
  const [clickLoggout, setClickLoggout] = useState(false);

  function handleInput(e) {
    setDate(e.target.value);
  }

  function shakeCalendar() {
    setClickCalendar(true);

    setTimeout(() => {
      setClickCalendar(false);
    }, 1000);
  }

  function loggout() {
    setClickLoggout(true);
    setTimeout(() => {
      setClickLoggout(false);
      setSession(null);
      localStorage.removeItem("session");
      navigate("/");
    }, 1000);
  }

  return (
    <Wrapper>
      <BsBoxArrowInLeft onClick={loggout} className={clickLoggout ? "anima-icon" : ""} size="35px" />
      <Date date={date} />
      <BoxInput>
        <IoCalendar className={clickCalendar ? "anima-icon" : ""} size="35px" />
        <Input onClick={shakeCalendar} type="date" onChange={handleInput} />
      </BoxInput>
    </Wrapper>
  );
}

const Shake = keyframes`

  0% { transform: rotate(0deg); }
  10% { transform: rotate(-10deg); }
  20% { transform: rotate(10deg); }
  30% { transform: rotate(-10deg); }
  40% { transform: rotate(10deg); }
  50% { transform: rotate(-10deg); }
  60% { transform: rotate(10deg); }
  70% { transform: rotate(-10deg); }
  80% { transform: rotate(10deg); }
  90% { transform: rotate(-10deg); }
  100% { transform: rotate(0deg); }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;

  position: relative;

  position: relative;
  .calendar {
    position: absolute;
    right: 0px;
    top: 0px;
  }

  .anima-icon {
    animation: ${Shake} 0.8s ease-in-out;
  }
`;

const BoxInput = styled.div`
  display: flex;
  justify-content: end;
  transition: all 0.5s ease-out;
`;

const Input = styled.input`
  width: 35px;
  height: 35px;
  background-color: yellow;
  opacity: 0;
  position: absolute;
  top: 0px;
  right: 2px;
`;
