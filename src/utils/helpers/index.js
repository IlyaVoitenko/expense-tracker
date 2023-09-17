export const formatterСurrency = (value) => {
  const number = value.split(".")[0];
  const numberAfterPoint = value.split(".")[1].slice(0, 2);
  const result = `${number}.${numberAfterPoint}`;
  return result;
};
