import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { isAuthenticated: false };

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      if (
        action.payload.email === "casey@email.com" &&
        action.payload.password === "123"
      ) {
        state.isAuthenticated = true;
      }
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export default authSlice;
