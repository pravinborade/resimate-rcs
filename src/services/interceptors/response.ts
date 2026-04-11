import type { AxiosResponse } from "axios";

export const responseInterceptor = (response: AxiosResponse) => {
  return response;
};

export const responseErrorHandler = (error: any) => {
  // 🔥 Global error handling

  if (error.response?.status === 401) {
    // Unauthorized → clear auth
    localStorage.removeItem('token');

    // redirect to login
    window.location.href = '/login';
  }

  return Promise.reject(error);
};