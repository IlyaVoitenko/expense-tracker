import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPrivatBankCurrencyExchange } from "../../services/api";

export const setCurrencyExchange = createAsyncThunk(
  "currencyExchange/setCurrencyExchange",
  async (_, apiThunk) => {
    try {
      const data = await getPrivatBankCurrencyExchange();
      return data;
    } catch (error) {
      apiThunk.rejectWithValue(error.message);
    }
  }
);
