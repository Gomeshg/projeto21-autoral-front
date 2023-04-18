export function getDateNow() {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = today.getFullYear();
  return `${year}-${month}-${day}`;
}

export function getTimeNow() {
  const today = new Date();

  const hours = today.getHours();
  const minutes = today.getMinutes();
  return `${hours}:${minutes}`;
}
