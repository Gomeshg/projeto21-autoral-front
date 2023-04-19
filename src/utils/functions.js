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
