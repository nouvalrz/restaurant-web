import axios from "axios";
import CONFIG from "../global/config";

const ApiClient = axios.create({
  baseURL: CONFIG.BASE_URL,
  timeout: 3000,
});

export default ApiClient;
