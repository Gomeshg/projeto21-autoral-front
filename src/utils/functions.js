export function getDateNow() {
  const date = new Date();
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
}

export function dateIsTomorrow(date) {
  const today = getDateNow().split("-");
  const arrayDate = date.split("-");

  if (
    today[0] === arrayDate[0] &&
    today[1] === arrayDate[1] &&
    Number(today[2]) + 1 === Number(arrayDate[2])
  ) {
    return true;
  }
  return false;
}

export function dateIsYesterday(date) {
  const today = getDateNow().split("-");
  const arrayDate = date.split("-");

  if (
    today[0] === arrayDate[0] &&
    today[1] === arrayDate[1] &&
    Number(today[2]) - 1 === Number(arrayDate[2])
  ) {
    return true;
  }
  return false;
}

export function formatDate(date) {
  const week = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
  const newDate = new Date(`${date}T00:00:00`);
  const day = String(newDate.getDate()).padStart(2, "0");
  const month = String(newDate.getMonth() + 1).padStart(2, "0");
  const week_day = week[newDate.getDay()];
  return `${week_day}, ${day}/${month}`;
}

export function convertToPtBr(date) {
  const arrayDate = date.split("-");
  const year = arrayDate[0];
  const month = arrayDate[1];
  const day = arrayDate[2];

  return `${day}-${month}-${year}`;
}

export function getTimeNow() {
  const today = new Date();

  const hours = today.getHours() + 1;
  return `${hours}:00`;
}

export function formatTime(date) {
  const newDate = new Date(date);
  const hours = String(newDate.getHours()).padStart(2, "0");
  const minutes = String(newDate.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
}

export function formatName(name) {
  return `${name.split(" ")[0]}`;
}

export function isUser(id, userId) {
  if (id === userId) {
    return true;
  }
  return false;
}
