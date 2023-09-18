import axios from "axios";

export const getPrivatBankCurrencyExchange = async () => {
  const { data } = await axios.get(
    `https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_cJGgnYwO0iX5Gt5EDEV9enBsSr2pNZuZZaWUZGd4&currencies=JPY`
  );
  return data;
};
