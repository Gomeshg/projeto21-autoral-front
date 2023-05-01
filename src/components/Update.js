import { useState, useEffect } from "react";
import styled from "styled-components";
import InputScheduling from "./InputScheduling";
import Select from "./Select";
import { extractDataFromLine, formatAvgDuration, convertToPtBr } from "../utils/functions";
import { cutTypes, avgDurations } from "../utils/objects";
import Button from "./Button";
import { putLine, getOneLine } from "../services/lineAPI";
import { useSession } from "../services/session";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Update({ update, setUpdate, setRefresh, refresh }) {
  const { session } = useSession();

  const [stepOne, setStepOne] = useState(false);
  const [stepTwo, setSteptwo] = useState(false);

  const [id, setId] = useState(null);
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [avgDuration, setAvgDuration] = useState("");

  useEffect(() => {
    if (update) {
      getOneLine(session.token).then((res) => {
        const { type, date, initTime, avgDuration } = extractDataFromLine(res);
        setId(res.id);
        setDate(date);
        setTime(initTime);
        setType(type);
        setAvgDuration(avgDuration);
      });
    }
  }, [update, session.token]);

  useEffect(() => {
    if (update) {
      openUpdate();
    }
  }, [update]);

  function crashUpdate() {
    setUpdate(false);

    setSteptwo(false);
    setTimeout(() => {
      setStepOne(false);
    }, 300);
  }

  function openUpdate() {
    setStepOne(true);
    setTimeout(() => {
      setSteptwo(true);
    }, 300);
  }

  function put(e) {
    e.preventDefault();

    const body = { type, date: convertToPtBr(date), initTime: time, avgDuration: formatAvgDuration(avgDuration) };
    putLine(id, body, session.token)
      .then(() => {
        crashUpdate();
        toast.success("Reagendamento bem sucedido!");
        setRefresh(!refresh);
      })
      .catch((e) => {
        crashUpdate();
        if (e.response.data.errorMessage === "Time already chosen") {
          toast.error("Horário já agendado!");
        } else if (e.response.data.errorMessage === "Time out") {
          toast.error("Horário permitidos apenas de 9h às 18h");
        } else {
          toast.error("Desculpe, houve algum erro interno!");
        }
      });
  }

  return (
    <Wrapper>
      <Background onClick={crashUpdate} className={stepOne && !stepTwo ? "background" : stepOne && stepTwo ? "background show" : ""} />
      <Updated onSubmit={put} className={stepOne && !stepTwo ? "update" : stepOne && stepTwo ? "update show" : ""}>
        <Select value={type} id="cut-types" label="Tipo de corte:" hashValues={cutTypes} setValue={setType} />

        <InputScheduling id="data" label="Data:" type="date" setValue={setDate} value={date} />

        <InputScheduling id="time" label="Horário:" type="time" setValue={setTime} value={time} />

        <Select value={avgDuration} id="avg-duration" label="Duração média:" hashValues={avgDurations} setValue={setAvgDuration} />

        <Button submit="submit" name={"Reagendar"} />
      </Updated>

      <ToastContainer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .background {
    height: 100vh;
  }

  .update {
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

const Updated = styled.form`
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
