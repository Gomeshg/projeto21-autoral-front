import { useState, useEffect } from "react";
import styled from "styled-components";
import InputScheduling from "./InputScheduling";
import Select from "./Select";
import { getDateNow, getTimeNow } from "../utils/functions";
import { cutTypes, avgDurations } from "../utils/objects";

export default function Scheduling({ scheduling, setScheduling }) {
  const [stepOne, setStepOne] = useState(false);
  const [stepTwo, setSteptwo] = useState(false);
  const [type, setType] = useState(null);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [avgDuration, setAvgDuration] = useState(null);

  useEffect(() => {
    const today = new Date();

    setDate(getDateNow());
    setTime(getTimeNow());
  }, []);

  useEffect(() => {
    if (scheduling) {
      setStepOne(true);
      setTimeout(() => {
        setSteptwo(true);
      }, 300);
    }
  }, [scheduling]);

  function crashScheduling() {
    setScheduling(false);
    setSteptwo(false);
    setTimeout(() => {
      setStepOne(false);
    }, 300);
  }

  return (
    <Wrapper>
      <Background
        onClick={crashScheduling}
        className={
          stepOne && !stepTwo
            ? "background"
            : stepOne && stepTwo
            ? "background show"
            : ""
        }
      ></Background>
      <Schedule
        className={
          stepOne && !stepTwo
            ? "scheduling"
            : stepOne && stepTwo
            ? "scheduling show"
            : ""
        }
      >
        <Select
          id="cut-types"
          label="Tipo de corte:"
          hashValues={cutTypes}
          setValue={setType}
        />
        <InputScheduling
          id="data"
          label="Data:"
          type="date"
          setValue={setDate}
          value={date}
        />

        <InputScheduling
          id="time"
          label="Horário:"
          type="time"
          setValue={setTime}
          value={time}
        />

        <Select
          id="avg-duration"
          label="Duração média:"
          hashValues={avgDurations}
          setValue={setAvgDuration}
        />
      </Schedule>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .background {
    height: 100vh;
  }

  .scheduling {
    height: 60vh;
  }

  .show {
    opacity: 1;
  }
`;

const Background = styled.div`
  height: 0vh;

  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  opacity: 0;

  transition: all 0.3s ease-out 0.1s;
`;

const Schedule = styled.div`
  height: 0vh;
  width: 80%;
  padding: 5%;
  overflow: hidden;
  background-color: rgb(200, 200, 200);

  border-radius: 15px;
  z-index: 2;

  position: fixed;
  top: 10vh;
  left: 10%;

  opacity: 0;

  transition: all 0.3s ease-out 0.1s;

  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 30px;
`;

const BoxTime = styled.div``;
