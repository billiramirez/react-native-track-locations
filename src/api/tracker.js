import axios from "axios";

export default axios.create({
  baseURL: "http://58baf2a6ac8a.ngrok.io",
});

// This baseURL will change due to ngrok
