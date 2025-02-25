import axios from "axios";

export async function get(path: string, data?: any) {
  const res = await axios.get(`/api` + path, {
    ...data,
    headers: { ...(data?.headers || {}), token: "test123" },
  });

  if (res.status !== 200) {
    return {
      error: res.statusText,
      code: res.status,
      data: null,
    };
  }

  return {
    error: false,
    code: res.status,
    data: res.data,
  };
}

export async function post(path: string, data?: any) {
  const res = await axios.post(`/api` + path, data, {
    headers: { token: "test123" },
  });

  if (res.status !== 201) {
    return {
      error: res.statusText,
      code: res.status,
      data: null,
    };
  }

  return {
    error: false,
    code: res.status,
    data: res.data,
  };
}
