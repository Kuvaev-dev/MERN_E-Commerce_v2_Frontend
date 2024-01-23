import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  success: false,
  error: null,
  paymentData: null,
};

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    paymentRequest: (state) => {
      state.loading = true;
      state.success = false;
      state.error = null;
      state.paymentData = null;
    },
    paymentSuccess: (state, action) => {
      state.loading = false;
      state.success = true;
      state.paymentData = action.payload;
    },
    paymentFail: (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
    },
  },
});

export const { paymentRequest, paymentSuccess, paymentFail } =
  paymentSlice.actions;
export default paymentSlice.reducer;
