import styled from "styled-components";
import { getLine, postLine, putLine, deleteLine } from "../services/lineAPI";
import LineButton from "./LineButton";

export default function Line() {
  return (
    <Screen>
      <LineButton />
    </Screen>
  );
}

const Screen = styled.div`
  height: 70vh;
  width: 80%;
  background-color: rgb(210, 210, 210);
  border-radius: 15px;
  overflow: scroll;
`;
