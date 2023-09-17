import axios from "axios";

export const getPrivatBankCurrencyExchange = async () => {
  const { data } = await axios.get(
    `https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5`
  );
  console.log("before :", data);
  return data;
};
