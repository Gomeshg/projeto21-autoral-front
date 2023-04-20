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
import { getDateNow, convertToPtBr } from "../utils/functions";

export default function Dashboard() {
  const { session } = useSession();
  const [date, setDate] = useState(null);
  const [lines, setLines] = useState(null);

  const [scheduling, setScheduling] = useState(false);
  console.log(lines);
  useEffect(() => {
    setDate(getDateNow());
  }, []);

  useEffect(() => {
    if (date) {
      const date_pt_br = convertToPtBr(date);
      getLine(date_pt_br, session.token)
        .then((res) => {
          setLines(res);
          toast.success("Lines obtidas com sucesso!");
        })
        .catch((e) => {
          toast.error("Houve um erro!");
        });
    }
  }, [date]);

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

  @media (min-width: 1040px) {
    width: 620px;
    margin: 0 auto;
  }
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
