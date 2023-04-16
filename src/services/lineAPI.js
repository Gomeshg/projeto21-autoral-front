import api from "./API";

export async function getLine(date, token) {
  const response = await api.get(`/line/${date}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function postLine(body, token) {
  const response = await api.post(`/line`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function putLine(id, body, token) {
  const response = await api.put(`/line/${id}`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function deleteLine(id, token) {
  const response = await api.delete(`/line/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
