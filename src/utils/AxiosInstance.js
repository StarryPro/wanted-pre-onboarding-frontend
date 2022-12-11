import axios from 'axios';

export const AxiosInstance = axios.create({
  baseURL: 'https://pre-onboarding-selection-task.shop/',
  headers: {
    'Content-Type': 'application/json',
  },
});

AxiosInstance.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem('access_token');

  if (accessToken && config.headers) {
    config.headers['Authorization'] = `Bearer ${accessToken}`;
  }
  return config;
});
