import styled from "styled-components";
import {
  getDateNow,
  dateIsTomorrow,
  dateIsYesterday,
  formatDate,
} from "../utils/functions";

export default function DateTitle({ date }) {
  function defineTitle() {
    if (getDateNow() === date) {
      return "Hoje";
    } else if (dateIsTomorrow(date)) {
      return "Amanhã";
    } else if (dateIsYesterday(date)) {
      return "Ontem";
    }

    return formatDate(date);
  }

  return <Wrapper>{date ? defineTitle() : ""}</Wrapper>;
}

const Wrapper = styled.div`
  font-size: 25px;
  font-weight: bold;
  min-width: max-content;
  text-align: center;
`;
