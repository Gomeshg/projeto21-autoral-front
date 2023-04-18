import styled from "styled-components";
import { useState, useEffect } from "react";
import { useSession } from "../services/session";
import Header from "../components/Header";
import Line from "../components/Line";
import Head from "../components/Head";
import LineButton from "../components/LineButton";
import Scheduling from "../components/Scheduling";
import { getLine } from "../services/lineAPI";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Dashboard() {
  const { session } = useSession();
  const [date, setDate] = useState(null);
  const [lines, setLines] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const [scheduling, setScheduling] = useState(false);

  function getDateNow() {
    const num = 9;
    const date = new Date();
    const year = date.getFullYear();
    const month =
      (date.getMonth() + 1).toString().length === 1
        ? `0${date.getMonth() + 1}`
        : date.getMonth() + 1;
    const day =
      date.getDate().toString().length === 1
        ? `0${date.getDate()}`
        : date.getDate();

    return `${day}-${month}-${year}`;
  }

  // useEffect(() => {
  //   const date = getDateNow();
  //   getLine(date, session.token)
  //     .then((res) => {
  //       setLines(res);
  //       toast.success("Lines obtidas com sucesso!");
  //     })
  //     .catch((e) => {
  //       alert(e.message);
  //       toast.error("Houve um erro!");
  //     });
  // }, [refresh]);

  return (
    <Screen>
      <Header />

      <LineContainer>
        <Head date={date} setDate={setDate} setLines={setLines} />
        <Line lines={lines} />
        <LineButton setScheduling={setScheduling} />
      </LineContainer>
      <Scheduling scheduling={scheduling} setScheduling={setScheduling} />
      <ToastContainer />
    </Screen>
  );
}

const Screen = styled.div`
  padding: 130px 5% 50px 5%;
  min-height: 100vh;
  max-height: min-content;

  position: relative;
`;

const LineContainer = styled.div`
  height: calc(100vh - 130px);
  border-radius: 15px;

  padding: 20px 5%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  position: relative;
`;
