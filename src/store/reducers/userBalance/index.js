import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wallet: 0,
  bankAccount: 0,
};

const userBalance = createSlice({
  name: "userBalance",
  initialState,
  reducers: {
    setWallet: (state, action) => {
      state.wallet += action.payload;
    },
    setBankAccount: (state, action) => {
      state.bankAccount += action.payload;
    },
  },
});
export const { setWallet, setBankAccount } = userBalance.actions;
export default userBalance.reducer;
