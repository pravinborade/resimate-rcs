import type { InternalAxiosRequestConfig } from "axios";


export const requestInterceptor = (
  config: InternalAxiosRequestConfig
) => {
  const token = localStorage.getItem('token');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
};

export const requestErrorHandler = (error: any) => {
  return Promise.reject(error);
};