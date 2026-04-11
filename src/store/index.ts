import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../modules/login/authSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

// ✅ Type for whole state
export type RootState = ReturnType<typeof store.getState>;

// ✅ Type for dispatch
export type AppDispatch = typeof store.dispatch;