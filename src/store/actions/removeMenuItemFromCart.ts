import { RemoveMenuItemFromCart } from './types';
import { REMOVE_MENU_ITEM_FROM_CART } from './constants';

export const removeMenuItemToCart = (
  id: string,
): RemoveMenuItemFromCart => ({
  type: REMOVE_MENU_ITEM_FROM_CART,
  id,
});
