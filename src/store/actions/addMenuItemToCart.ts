import { ADD_MENU_ITEM_TO_CART } from './constants';
import { AddMenuItemToCart } from './types';

export const addMenuItemToCart = (
  id: string,
): AddMenuItemToCart => ({
  type: ADD_MENU_ITEM_TO_CART,
  id,
});
