import styled from "styled-components";
import SideIcon from "../components/SideIcon";

export default function Header() {
  return (
    <Screen>
      <Wrapper>
        <SideIcon />
        <Title>Faster Barber</Title>
      </Wrapper>
    </Screen>
  );
}

const Screen = styled.div`
  height: 100px;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

const Title = styled.h1`
  font-size: 30px;
  color: white;
  font-family: "Bungee Shade", cursive;
  background-color: black;
  align-self: center;

  @media (max-width: 420px) {
    font-size: 25px;
  }
  @media (max-width: 370px) {
    font-size: 22px;
  }
`;
