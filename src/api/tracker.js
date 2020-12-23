import axios from "axios";

export default axios.create({
  baseURL: "http://be6b69df8a3b.ngrok.io",
});

// This baseURL will change due to ngrok
