export const createSalary = (paymentFrom: number, paymentTo: number, currency: string) => {
  if (paymentFrom && paymentTo) {
    return `з/п от ${paymentFrom} - ${paymentTo} ${currency}`;
  } else if (paymentFrom) {
    return `з/п от ${paymentFrom} ${currency}`;
  } else if (paymentTo) {
    return `з/п до ${paymentTo} ${currency}`;
  } else {
    return 'з/п не указана';
  }
};
