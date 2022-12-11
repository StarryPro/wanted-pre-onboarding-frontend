import { AxiosInstance } from './AxiosInstance';

export const loginApi = async (email, password) => {
  return AxiosInstance.post('/auth/signin', { email, password });
};

export const joinApi = async (email, password) => {
  return AxiosInstance.post('/auth/signup', { email, password });
};
