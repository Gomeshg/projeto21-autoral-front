import styled from "styled-components";
import {
  getDateNow,
  dateIsTomorrow,
  dateIsYesterday,
} from "../utils/functions";

export default function Date({ date }) {
  function defineTitle() {
    if (getDateNow() === date) {
      return "Today";
    } else if (dateIsTomorrow(date)) {
      return "Tomorrow";
    } else if (dateIsYesterday(date)) {
      return "Yesterday";
    }
    return date;
  }

  return <Wrapper>{defineTitle()}</Wrapper>;
}

const Wrapper = styled.div`
  font-size: 25px;
  font-weight: bold;
  min-width: max-content;
  text-align: center;
`;
