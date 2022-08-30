export const neededClass = (styles, variants) =>
Object.keys(variants).map(key => {
  const value = variants[key];
  return styles[`${key}-${value}`];;
});