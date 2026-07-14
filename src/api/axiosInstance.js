import axios from 'axios';

// Use empty baseURL so all requests go through Vite's proxy (/api → backend)
// This ensures auth cookies are always forwarded correctly.
// The actual backend target is configured in vite.config.js proxy settings.
const axiosInstance = axios.create({
  baseURL: '',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
