import { IndustryCatalogResponse } from '@/models';

interface Item {
  value: string;
  label: string;
  itemKey: number;
}

type AdaptedData = Item[];

export const adaptData = (data?: IndustryCatalogResponse) => {
  if (data) {
    return data.reduce<AdaptedData>((acc, curr) => {
      const newItem = {
        value: curr.title,
        label: curr.title,
        itemKey: curr.key,
      };
      acc.push(newItem);
      return acc;
    }, []);
  }
  return [{ value: 'Loading', label: 'Loading...', itemKey: 0 }];
};
