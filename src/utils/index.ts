import { COLORS_KEYS, LS_KEYS } from '@/constants';
import { MantineTheme, rem } from '@mantine/core';

export const callFunctionWithFavoriteIds = <T extends Array<number>>(foo: (arg: T) => void) => {
  const storageIds = localStorage.getItem(LS_KEYS.IDS);
  if (storageIds) {
    const parsedIds = JSON.parse(storageIds);
    if (parsedIds instanceof Array) {
      if (parsedIds.every((item) => typeof item === 'number')) {
        foo(parsedIds as T);
      }
    }
  }
};

export const getXsSolidBorderStyles = (theme: MantineTheme) => ({
  border: `${rem(1)} solid ${theme.colors[COLORS_KEYS.GREY_SCALE][2]}`,
  borderRadius: 12,
});

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
