export const $httpParameterNumber = (value: string) =>
  value !== "null" ? toNumber(value) : null;

const toNumber = (str: string): number | string => {
  const value: number = Number(str);
  return isNaN(value) ? str : value;
};
