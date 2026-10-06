export const cpfValid = (cpf: string) => {
  if (!/^\d{11}$/.test(cpf) || /^(.)\1+$/.test(cpf)) {
    return false;
  }

  const digits = [...cpf].map((digit) => +digit);
  const sum1 =
    digits
      .slice(0, 9)
      .map((d, i) => d * (10 - i))
      .reduce((p, c) => p + c) % 11;
  const sum2 =
    digits
      .slice(0, 10)
      .map((d, i) => d * (11 - i))
      .reduce((p, c) => p + c) % 11;

  const vd1 = sum1 < 2 ? 0 : 11 - sum1;
  const vd2 = sum2 < 2 ? 0 : 11 - sum2;

  if (vd1 !== digits[9] || vd2 !== digits[10]) {
    return false;
  }
  return true;
};

export const phoneValid = (phone: string) => /^\d{10,11}$/.test(phone);
