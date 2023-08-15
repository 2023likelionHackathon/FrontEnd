import axios from "axios";

const api = axios.create({ baseURL: "http://api.domarketdodo.shop/board/viewAll" });

export const getUser = api.get();
