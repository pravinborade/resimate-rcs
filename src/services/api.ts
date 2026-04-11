import axios from 'axios';


import { requestErrorHandler, requestInterceptor } from './interceptors/request';
import { responseErrorHandler, responseInterceptor } from './interceptors/response';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 10000,
});

// ✅ Attach interceptors
api.interceptors.request.use(requestInterceptor, requestErrorHandler);
api.interceptors.response.use(responseInterceptor, responseErrorHandler);

export default api;