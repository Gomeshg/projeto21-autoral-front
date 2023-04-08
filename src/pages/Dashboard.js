import styled from "styled-components";
import { useSession } from "../services/session";
import Header from "../components/Header";

export default function Dashboard() {
  const { session } = useSession();

  return (
    <Screen>
      <Header />
    </Screen>
  );
}

const Screen = styled.div``;
