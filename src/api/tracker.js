import axios from "axios";

export default axios.create({
  baseURL: "http://5f49f8ac882b.ngrok.io",
});

// This baseURL will change due to ngrok
