import {
  faBuildingColumns,
  faWallet,
  faTrain,
  faHandHoldingDollar,
} from "@fortawesome/free-solid-svg-icons";

export const formatterСurrencyValue = (value) => {
  if (value) {
    const number = value.toString().split(".")[0];
    const numberAfterPoint = value.toString().split(".")[1].slice(0, 2);
    const result = `${number}.${numberAfterPoint}`;
    return result;
  }
  return;
};
export const formatterСurrencyName = (value) => {
  if (value) return Object.keys(value)[0];
  return;
};
export const filterIconBtn = (title) => {
  switch (title) {
    case "bank account":
      return faBuildingColumns;
    case "wallet":
      return faWallet;
    default:
      break;
  }
};
export const filterStyleBtn = (title) => {
  switch (title) {
    case "bank account":
      return { color: "#3564b6" };
    case "wallet":
      return { color: "#00a4db" };
    default:
      break;
  }
};
