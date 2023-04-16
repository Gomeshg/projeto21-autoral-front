import styled from "styled-components";
import icon from "../assets/images/fasterbarber2.png";
export default function Icon() {
  return <Screen src={icon}></Screen>;
}

const Screen = styled.img`
  height: 320px;
  width: 350px;
`;
