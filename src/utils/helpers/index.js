import {
  faBuildingColumns,
  faWallet,
  faTrain,
  faHandHoldingDollar,
  faPhone,
  faBook,
  faCapsules,
  faUserDoctor,
  faPiggyBank,
  faPlaneDeparture,
  faPersonRifle,
  faGamepad,
  faShirt,
  faCar,
  faFileInvoiceDollar,
  faBowlFood,
  faUtensils,
  faHouseUser,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";

import {
  setIndexSelectedItemCategories,
  setAddBalanceCategorie,
} from "../../store/reducers/categories";
import {
  setIndexSelectedItemBalance,
  setAddBalance,
  setSubtractBalance,
} from "../../store/reducers/userBalance";
import {
  setCategorieOrBalanceUser,
  setValueAccountСhange,
} from "../../store/reducers/valueAccountСhange";
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
    case "transport":
      return faTrain;
    case "credit":
      return faHandHoldingDollar;
    case "phone":
      return faPhone;
    case "education":
      return faBook;
    case "medicines":
      return faCapsules;
    case "med insurance":
      return faUserDoctor;
    case "saving money":
      return faPiggyBank;
    case "travel":
      return faPlaneDeparture;
    case "UAF":
      return faPersonRifle;
    case "enjoyment":
      return faGamepad;
    case "shopping":
      return faShirt;
    case "auto":
      return faCar;
    case "taxs":
      return faFileInvoiceDollar;
    case "food":
      return faBowlFood;
    case "food outside":
      return faUtensils;
    case "public utilities":
      return faHouseUser;
    case "housing rent":
      return faHouse;
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
    case "credit":
      return { color: "#3872b6" };
    case "phone":
      return { color: "#5893f9" };
    case "education":
      return { color: "#1cb5ab" };
    case "medicines":
      return { color: "#909292" };
    case "saving money":
      return { color: "#1d4486" };
    case "travel":
      return { color: "#01790f" };
    case "UAF":
      return { color: "#f0dc00" };
    case "shopping":
      return { color: "#159fc1" };
    case "auto":
      return { color: "#88a7dd" };
    case "food":
      return { color: "#6f6106" };
    default:
      return { color: "#3564b6" };
  }
};
export const handleEdit = (list, idItem, nameList, dispatch) => {
  const index = list.findIndex((item) => item.id === idItem);
  switch (nameList) {
    case "categories":
      dispatch(setCategorieOrBalanceUser(nameList));
      dispatch(setIndexSelectedItemCategories(index));
      break;
    case "userBalance":
      dispatch(setCategorieOrBalanceUser(nameList));
      dispatch(setIndexSelectedItemBalance(index));
      break;
    default:
      break;
  }
};
export const handleClose = (dispatch, navigation) => {
  dispatch(setValueAccountСhange(0));
  return navigation.goBack();
};
export const handleSaveChanges = (
  dispatch,
  nameList,
  valueAccountСhange,
  navigation
) => {
  const valueToNumber = +valueAccountСhange;
  switch (nameList) {
    case "categories":
      dispatch(setSubtractBalance(valueToNumber));
      dispatch(setAddBalanceCategorie(valueToNumber));
      dispatch(setValueAccountСhange(0));
      return navigation.goBack();
    case "userBalance":
      dispatch(setAddBalance(valueToNumber));
      dispatch(setValueAccountСhange(0));
      return navigation.goBack();
  }
};
export const handleTextChange = (dispatch, newText) => {
  dispatch(setValueAccountСhange(newText));
};
