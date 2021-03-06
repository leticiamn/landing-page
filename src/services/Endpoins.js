import axios from "axios";

const httpClient = axios.create({
  baseURL: "https://projetocamilla.herokuapp.com/",
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
