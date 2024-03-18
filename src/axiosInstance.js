// axiosInstance.js

import axios from 'axios';

// Crea una instancia de Axios con la base URL deseada
const AxiosInstance = axios.create({
  //baseURL: 'https://billionsoffice.com:46137/', // Reemplaza con tu base URL
  baseURL: 'http://localhost:3002/',
});

export default AxiosInstance;
