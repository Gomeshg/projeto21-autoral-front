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
  position: fixed;
  top: 0;
  left: 0;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  box-shadow: 0px 0px 20px black;
`;

const Title = styled.h1`
  color: white;
  font-family: "Bungee Shade", sans-serif;
  background-color: black;
  align-self: center;

  @media (min-width: 0px) and (max-width: 400px) {
    font-size: 20px;
  }
  @media (min-width: 401px) and (max-width: 1240px) {
    font-size: 28px;
  }

  @media (min-width: 1241px) {
    font-size: 40px;
  }
`;
