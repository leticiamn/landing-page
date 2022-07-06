import axios from "axios";

const httpClient = axios.create({
  baseURL: "http://localhost:8080/",
  headers: {
    "Content-type": "application/json",
  },
});

export const getAll = () => {
  return httpClient.get("/form", { headers: { Authorization: "Bearer " + localStorage.getItem("jwtToken") } });
};

export const exportExcel = () => {
  return httpClient.get("/users/export/excel", {
    responseType: "blob",
    headers: { Authorization: "Bearer " + localStorage.getItem("jwtToken") },
  });
};

export const buscaPeriodo = (data) => {
  return httpClient.post("/form/buscaPeriodo", data, {
    headers: { Authorization: "Bearer " + localStorage.getItem("jwtToken"), "Content-type": "application/json" }
  });
};

export const login = (data) => {
  return httpClient.post(
    "/token",
    {},
    {
      auth: {
        username: data.username,
        password: data.password
      },
    }
  );
};
