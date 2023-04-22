import styled, { keyframes } from "styled-components";
import { GrUpdate } from "react-icons/gr";
import { FaTrashAlt } from "react-icons/fa";
import { useState } from "react";
import { useSession } from "../services/session";
import { formatTime, formatName, isUser } from "../utils/functions";
import { deleteLine, updateLine } from "../services/lineAPI";
import { useEffect } from "react";

export default function User({ id, name, initTime, lineId, setRefresh, refresh, setConfirm, responseConfirm, setUpdate }) {
  const { session } = useSession();
  const { token, userId } = session;

  const [clickUpdate, setClickUpdate] = useState(false);
  const [clickDelete, setClickDelete] = useState(false);

  function shakeUpdateIcon() {
    setClickUpdate(true);

    setTimeout(() => {
      setClickUpdate(false);
      setUpdate(true);
    }, 500);
  }

  function shakeDeleteIcon() {
    setClickDelete(true);
    setTimeout(() => {
      setClickDelete(false);
      setConfirm(true);
    }, 500);
  }

  useEffect(() => {
    if (responseConfirm) {
      deleteLine(lineId, token).then((res) => {
        setRefresh(!refresh);
      });
    }
  }, [responseConfirm]);

  return (
    <Wrapper>
      <Time>{formatTime(initTime)}</Time>
      <Name>{formatName(name)}</Name>
      {isUser(id, userId) ? (
        <BoxIcon>
          <GrUpdate className={clickUpdate ? "anima-icon" : ""} onClick={shakeUpdateIcon} size="23px" />
          <FaTrashAlt className={clickDelete ? "anima-icon" : ""} onClick={shakeDeleteIcon} size="23px" />
        </BoxIcon>
      ) : (
        <InvisibleBox></InvisibleBox>
      )}
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

  .bunda {
    display: none !important;
    position: fixed !important;
    background-color: red;
    color: red;
  }
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

const InvisibleBox = styled.div`
  width: 61px;
  height: 23px;
`;
