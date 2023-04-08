import styled from "styled-components";
import icon from "../assets/sideicon.png";
export default function SideIcon() {
  return <Screen src={icon}></Screen>;
}

const Screen = styled.img`
  height: 100px;
  width: 110px;
  display: block;
`;
