import { createSlice } from "@reduxjs/toolkit";
import { userBalanceList } from "../../../utils/arrayUserBalance";
const initialState = {
  userBalanceList: [...userBalanceList],
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
