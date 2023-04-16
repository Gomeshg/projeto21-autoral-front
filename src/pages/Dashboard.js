import styled from "styled-components";
import { useSession } from "../services/session";
import Header from "../components/Header";
import Line from "../components/Line";
import { IoCalendar } from "react-icons/io5";

export default function Dashboard() {
  const { session } = useSession();

  return (
    <Screen>
      <Header />
      <LineContainer>
        <Head>
          <Title>Today</Title>
          <IoCalendar className="Icon" size="40px" />
        </Head>
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

  /* background-color: green; */

  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  .Icon {
    border-radius: 12px;
  }
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
`;

const Title = styled.h2`
  font-size: 25px;
  font-weight: bold;

  width: 55%;
  text-align: end;
`;
