export const cpfFormat = (value: string) => {
  if (!value.match(/\d{11}/)) {
    return value;
  }
  return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
};
