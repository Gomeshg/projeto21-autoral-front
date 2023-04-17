import styled from "styled-components";
import { useSession } from "../services/session";
import Header from "../components/Header";
import Line from "../components/Line";
import { useState, useEffect } from "react";
import Head from "../components/Head";
import LineButton from "../components/LineButton";
import { getLine } from "../services/lineAPI";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Dashboard() {
  const { session } = useSession();
  const [date, setDate] = useState(null);
  const [lines, setLines] = useState(null);

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

  useEffect(() => {
    const date = getDateNow();
    getLine(date, session.token)
      .then((res) => {
        setLines(res);
        toast.success("Lines obtidas com sucesso!");
      })
      .catch((e) => {
        toast.error("Houve um erro!");
      });
  }, []);

  return (
    <Screen>
      <Header />

      <LineContainer>
        <Head date={date} setDate={setDate} setLines={setLines} />
        <Line />
        <LineButton />
      </LineContainer>
      <ToastContainer />
    </Screen>
  );
}

const Screen = styled.div`
  padding: 130px 5% 50px 5%;
  min-height: 100vh;
  max-height: min-content;

  background-color: rgba(255, 0, 0, 0.5);
`;

const LineContainer = styled.div`
  height: calc(100vh - 130px);
  border-radius: 15px;

  padding: 20px 5%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  position: relative;
  background-color: rgba(0, 255, 0, 0.5);
`;
