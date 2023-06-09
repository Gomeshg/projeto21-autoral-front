import styled from "styled-components";
import User from "./User";

export default function Line({ lines, refresh, setRefresh, setConfirm, responseConfirm, setScheduling, setUpdate }) {
  return (
    <Screen>
      {lines &&
        lines.map((line, index) => (
          <User
            key={index}
            id={line.userId}
            lineId={line.id}
            name={line.user.name}
            initTime={line.initTime}
            endTime={line.endTime}
            setRefresh={setRefresh}
            refresh={refresh}
            setConfirm={setConfirm}
            responseConfirm={responseConfirm}
            setScheduling={setScheduling}
            setUpdate={setUpdate}
          />
        ))}
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
