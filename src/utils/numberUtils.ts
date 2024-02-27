export function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export const formatNumber = (value: number) => {
  const str = String(value);
  if (str.length > 1) return str.replace(/^0+/, "");
  else return str;
};
