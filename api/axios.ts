import axios from 'axios';

const instance = axios.create({
  baseURL: '<YOUR_API_BASE_URL>',
  timeout: 5000,
});

export default instance;