// import axios from 'axios';

// const instance = axios.create({
//   baseURL: 'http://localhost:5000/api', 
// });

// export default instance;


import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  withCredentials: true, 
});

export default instance;

