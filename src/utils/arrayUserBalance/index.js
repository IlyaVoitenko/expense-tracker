import { v4 as uuid } from "uuid";
import { faBuildingColumns, faWallet } from "@fortawesome/free-solid-svg-icons";

export const userBalanceList = [
  { id: uuid(), title: "wallet", summa: 0 },
  { id: uuid(), title: "bank account", summa: 0 },
];

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
