import axios from "axios";

export default axios.create({
  baseURL: "http://0e79d2339948.ngrok.io",
});

// This baseURL will change due to ngrok
