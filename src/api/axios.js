// frontend/src/api/axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "https://spare-backend-production.up.railway.app/api",
});

export default instance;
