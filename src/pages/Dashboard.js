import styled from "styled-components";
// import { useSession } from "../services/session";
import Header from "../components/Header";
import Line from "../components/Line";
import { useState } from "react";
import Head from "../components/Head";

export default function Dashboard() {
  // const { session } = useSession();
  const [date, setData] = useState(null);

  return (
    <Screen>
      <Header />
      <LineContainer>
        <Head value={date} setValue={setData} />

        <Line />
      </LineContainer>
    </Screen>
  );
}

const Screen = styled.div`
  padding: 110px 5% 50px 5%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-direction: column;
  overflow: scroll;
`;

const LineContainer = styled.div`
  height: 80vh;
  width: 100%;
  border-radius: 15px;

  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;
