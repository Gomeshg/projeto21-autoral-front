import { useState, useEffect } from "react";
import styled from "styled-components";
import InputScheduling from "./InputScheduling";
import Select from "./Select";
import { getDateNow, getTimeNow } from "../utils/functions";
import { cutTypes, avgDurations } from "../utils/objects";
import Button from "./Button";
import { postLine } from "../services/lineAPI";
import { useSession } from "../services/session";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Scheduling({ scheduling, setScheduling }) {
  const { session } = useSession();

  const [stepOne, setStepOne] = useState(false);
  const [stepTwo, setSteptwo] = useState(false);
  const [type, setType] = useState(null);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [avgDuration, setAvgDuration] = useState(null);

  useEffect(() => {
    setDate(getDateNow());
    setTime(getTimeNow());
  }, []);

  useEffect(() => {
    openScheduling();
  }, [scheduling]);

  function crashScheduling() {
    setScheduling(false);
    setSteptwo(false);
    setTimeout(() => {
      setStepOne(false);
    }, 300);
  }

  function openScheduling() {
    if (scheduling) {
      setStepOne(true);
      setTimeout(() => {
        setSteptwo(true);
      }, 300);
    }
  }

  function schedule(e) {
    e.preventDefault();
    console.log();
    const body = { type, date, time, avgDuration };
    postLine(body, session.token)
      .then((res) => {
        toast.success("Agendamento bem sucedido!");
        setScheduling(false);
      })
      .catch((e) => {
        toast.error("Erro no agendamento!");
      });
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
        onSubmit={schedule}
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

        <Button submit="submit" name="Agendar" />
      </Schedule>
      <ToastContainer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .background {
    height: 100vh;
  }

  .scheduling {
    height: 60vh;
    padding-top: 5%;
    @media (min-width: 1040px) {
      height: 80vh;
    }
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

const Schedule = styled.form`
  height: 0vh;
  width: 80%;
  padding: 0px 5%;
  overflow: scroll;
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
