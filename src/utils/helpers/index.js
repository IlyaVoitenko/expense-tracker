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
