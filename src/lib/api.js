import axios from "axios";

const api = axios.create({ baseURL: "http://54.180.53.205:8080/board/viewAll" });

export const getUser = api.get();
