import { v4 as uuid } from "uuid";
import { AiOutlineBank } from "react-icons/ai";
import { BsWallet2 } from "react-icons/bs";

export const userBalanceList = [
  { id: uuid(), title: "wallet", summa: 0 },
  { id: uuid(), title: "bank account", summa: 0 },
];
