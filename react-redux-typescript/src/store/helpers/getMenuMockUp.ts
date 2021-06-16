import { v4 as uuid } from 'uuid';
import { Menu, MenuMockUp } from '../types/types';
import { getImageUrlByName } from './getImageUrlByName';
import { getRandIntInRange } from './getIntInRange';

export const getMenuMockUp = (
  menuData: MenuMockUp,
): Menu => ({
  ...menuData.map((item) => ({
    [uuid()]: {
      ...item,
      price: getRandIntInRange(10, 50),
      imageUrl: getImageUrlByName(item.name)
    }
  }))
});
