import client from "./axiosClient";

export async function login(username, password) {
  const response = await client.post('/login/', {
    username,
    password,
  });

  return response.data;
}

export function saveTokens(access, refresh) {
  localStorage.setItem('access_token', access);
  localStorage.setItem('refresh_token', refresh);
}

export function logout() {
  localStorage.removeItem('access_token');
  localStorage.removeItem('refresh_token');
}

export async function getCurrentUser() {
  const response = await client.get("/me/");
  return response.data;
}



