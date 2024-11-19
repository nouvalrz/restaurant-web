import axios from "axios";
import CONFIG from "../global/config";

const ApiClient = axios.create({
  baseURL: CONFIG.BASE_URL,
  timeout: 50000,
});

export default ApiClient;
