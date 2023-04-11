import { createSlice } from "@reduxjs/toolkit";

export const QuantitySlice = createSlice({
  name: "count",
  initialState: {
    value: localStorage.getItem("count")
      ? JSON.parse(localStorage.getItem("count"))
      : 0,
  },

  reducers: {
    Increament: (state) => {
      state.value += 1;

      localStorage.setItem("count", JSON.stringify(state.value));
    },
    Decreament: (state) => {
      state.value > 0 ? (state.value -= 1) : (state.value = 0);

      localStorage.setItem("count", JSON.stringify(state.value));
    },
  },
});

export const { Increament, Decreament } = QuantitySlice.actions;

export default QuantitySlice.reducer;
