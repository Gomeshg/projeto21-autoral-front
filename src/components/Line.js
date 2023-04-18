import styled from "styled-components";
import { getLine, postLine, putLine, deleteLine } from "../services/lineAPI";
import LineButton from "./LineButton";
import User from "./User";

export default function Line() {
  return (
    <Screen>
      <User />
      <User />
      <User />
      <User />

      <User />
      <User />
      <User />
      <User />

      <User />
      <User />
      <User />
      <User />

      <User />
      <User />
      <User />
      <User />
    </Screen>
  );
}

const Screen = styled.div`
  padding: 5% 5% 10% 5%;
  height: 100vh;
  background-color: rgb(200, 200, 200);
  border-radius: 15px;
  overflow: scroll;

  display: flex;
  flex-direction: column;

  gap: 10px;
`;
