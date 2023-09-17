import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPrivatBankCurrencyExchange } from "../../services/api";

export const setCurrencyExchangeList = createAsyncThunk(
  "currencyExchange/setCurrencyExchangeList",
  async (_, apiThunk) => {
    try {
      console.log("started");
      const data = await getPrivatBankCurrencyExchange();
      console.log("after :", data);
      return data;
    } catch (error) {
      apiThunk.rejectWithValue(error.message);
    }
  }
);
