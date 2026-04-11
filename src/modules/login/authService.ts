// authService.ts

import api from '../../services/api';
import type { LoginPayload, LoginResponse } from './authTypes';


export const loginAPI = async (
  payload: LoginPayload
): Promise<LoginResponse> => {
  const res = await api.post('/login', payload);
  return res.data;
};