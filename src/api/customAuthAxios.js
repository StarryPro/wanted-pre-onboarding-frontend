import axios from 'axios';

// 인증이 필요하지 않은 axios 인스턴스
export const customAuthAxios = axios.create({
  baseURL: 'https://pre-onboarding-selection-task.shop/',
  headers: { 'Content-Type': 'application/json' },
});
