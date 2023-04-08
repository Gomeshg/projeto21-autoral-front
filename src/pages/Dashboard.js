import styled from "styled-components";
import { useSession } from "../services/session";

export default function Dashboard() {
  const { session } = useSession();

  return <h1>Token: {session.token}</h1>;
}
