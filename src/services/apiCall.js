import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL + "/web",
  headers: {
    "Access-Control-Allow-Origin": "*",
    // 'Authorization':'Bearer '+ localStorage.getItem('authToken')
  },
});

export default instance;
