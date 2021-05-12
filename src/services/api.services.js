import axios from "axios";

import * as endpoints from "./Endpoints";

let token = "";
const user = JSON.parse(window.localStorage.getItem("current_user"));
if (!user) {
  token = null;
} else {
  token = user.token;
}

const API = (header) => {
  return axios.create({
    baseURL: endpoints.api.baseUrl,
    headers: {
      ...header,
      "Authorization": `Bearer ${token}`,
    }
  })
} 

export default API;