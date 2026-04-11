// authThunks.ts

import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginAPI } from './authService';
import type { LoginPayload, LoginResponse } from './authTypes';


export const loginUser = createAsyncThunk<
  LoginResponse,
  LoginPayload,
  { rejectValue: string }
>(
  'auth/loginUser',
  async (payload, { rejectWithValue }) => {
    try {
      return await loginAPI(payload);
    } catch (err: any) {
      return rejectWithValue(
        err.response?.data?.message || 'Login failed'
      );
    }
  }
);