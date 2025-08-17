import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://spare-backend-production.up.railway.app/api', 
});

export default instance;




