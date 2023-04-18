import styled, { keyframes } from "styled-components";
import { GrUpdate } from "react-icons/gr";
import { FaTrashAlt } from "react-icons/fa";
import { useState } from "react";

export default function User() {
  const [clickUpdate, setClickUpdate] = useState(false);
  const [clickDelete, setClickDelete] = useState(false);

  function shakeUpdateIcon() {
    setClickUpdate(true);
    setTimeout(() => {
      setClickUpdate(false);
    }, 1000);
  }

  function shakeDeleteIcon() {
    setClickDelete(true);
    setTimeout(() => {
      setClickDelete(false);
    }, 1000);
  }

  return (
    <Wrapper>
      <Time>09:00</Time>
      <Name>Hugo</Name>
      <BoxIcon>
        <GrUpdate
          className={clickUpdate ? "anima-icon" : ""}
          onClick={shakeUpdateIcon}
          size="23px"
        />
        <FaTrashAlt
          className={clickDelete ? "anima-icon" : ""}
          onClick={shakeDeleteIcon}
          size="23px"
        />
      </BoxIcon>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 0px 20px;
  width: 100%;
  height: 45px;
  min-height: 45px;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: "Poppins", sans-serif;
`;

const Name = styled.p`
  font-size: 20px;
  color: rgba(0, 0, 0, 1);
`;

const Time = styled.p`
  font-size: 12px;
  color: black;
  font-weight: bold;
  transform: translateY(2px);
`;

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

const BoxIcon = styled.div`
  display: flex;
  gap: 15px;

  .anima-icon {
    animation: ${Shake} 0.8s ease-in-out;
  }
`;
