import axios from "axios";

import * as endpoints from "./Endpoints";

let token = "";
const user = JSON.parse(window.localStorage.getItem("current_user"));
if (!user) {
  token = null;
} else {
  token = user.token;
}


export default axios.create({
  baseURL: endpoints.api.baseURL,
  headers: {
    "Authorization": `Bearer ${token}`
  }
});


