import { createSlice } from "@reduxjs/toolkit";
import { userBalanceList } from "../../../utils/arrayUserBalance";

const initialState = {
  userBalanceList: [...userBalanceList],
  indexSelectedItem: null,
};

const userBalance = createSlice({
  name: "userBalance",
  initialState,
  reducers: {
    setIndexSelectedItemBalance: (state, action) => {
      state.indexSelectedItem = action.payload;
    },
    setAddBalance: (state, action) => {
      state.userBalanceList[indexSelectedItem].summa += action.payload;
    },
    setSubtractBalance: (state, action) => {
      state.userBalanceList[indexSelectedItem].summa += action.payload;
    },
  },
});
export const {
  setAddBalance,
  setSubtractBalance,
  setIndexSelectedItemBalance,
} = userBalance.actions;
export default userBalance.reducer;
