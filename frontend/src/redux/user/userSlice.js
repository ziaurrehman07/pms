import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  userRole: null,
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    setUserRole: (state, action) => {
      state.userRole = action.payload;
    },
    loginSuccess: (state, action) => {
      state.currentUser = action.payload.currentUser;
      state.loading = false;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { setUserRole, loginStart, loginSuccess, loginFailure } =
  userSlice.actions;
export default userSlice.reducer;
