import { v4 as uuid } from 'uuid';
import { IMenu } from '../types/types';
import { getImageUrlByName } from './getImageUrlByName';
import { genIntInRange } from './getIntInRange';

export const getMenuMockUp = (
  menuData: { name: string, description: string }[],
): IMenu => {
  return menuData.map((item) => ({
    [uuid()]: {
      ...item,
      price: genIntInRange(10, 50),
      imageUrl: getImageUrlByName(item.name)
    }
  }));
};
