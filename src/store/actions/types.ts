import {
  ADD_MENU_ITEM_TO_CART,
  REMOVE_MENU_ITEM_FROM_CART,
  SET_ORDER,
  SET_USER,
  TOGGLE_CURRENCY,
  TOGGLE_MODAL,
} from './constants';
import { Order, User, UUID } from '../types/types';

export interface AddMenuItemToCart {
  type: typeof ADD_MENU_ITEM_TO_CART;
  id: UUID;
}

export interface RemoveMenuItemFromCart {
  type: typeof REMOVE_MENU_ITEM_FROM_CART;
  id: UUID;
}

export interface ToggleCurrency {
  type: typeof TOGGLE_CURRENCY;
}

export interface ToggleModal {
  type: typeof TOGGLE_MODAL;
}

export interface SetOrder {
  type: typeof SET_ORDER;
  order: Order;
}

export interface SetUser {
  type: typeof SET_USER;
  user: User;
}

export type AppAction = (
  AddMenuItemToCart |
  RemoveMenuItemFromCart |
  ToggleCurrency |
  ToggleModal |
  SetOrder |
  SetUser
  )
