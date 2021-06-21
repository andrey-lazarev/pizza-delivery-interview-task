import { v4 as uuid } from 'uuid';
import { Menu, MenuMockUp } from '../types/types';
import { getImageUrlByName } from './getImageUrlByName';
import { getRandIntInRange } from './getIntInRange';

export const transformMenuMockUpToMenu = (
  menuMockUp: MenuMockUp,
): Menu => ({
  ...menuMockUp.map((item) => ({
    [uuid()]: {
      ...item,
      price: getRandIntInRange(),
      imageURL: getImageUrlByName(item.name)
    }
  }))
});
