import axios from "axios";

const baseAPI = axios.create({
  baseURL: "https://alshaaliadmin.glmaagencyprojects.com/api",
});

export default baseAPI;
