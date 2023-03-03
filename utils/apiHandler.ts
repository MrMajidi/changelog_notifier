import axios from "axios";

export const clientApi = axios.create();
clientApi.interceptors.response.use((response) => response, (error) => {
  alert(error.response.data.message)
}); 