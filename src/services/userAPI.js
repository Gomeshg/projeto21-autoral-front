import api from "./API";

export async function signUp(email, password, name, numberPhone) {
  const response = await api.post("/sign-up", {
    email,
    password,
    name,
    numberPhone,
  });
  return response;
}

export async function signIn(email, password) {
  const response = await api.post("/sign-in", {
    email,
    password,
  });
  return response;
}
