import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  TOGGLE_MODAL_IS_OPEN,
  SET_ORDER,
  SET_USER,
  TOGGLE_CURRENCY,
} from './constants';
import { Order, User, UUID } from '../types/types';

export interface AddItemToCart {
  type: typeof ADD_ITEM_TO_CART;
  id: UUID;
}

export interface RemoveItemFromCart {
  type: typeof REMOVE_ITEM_FROM_CART;
  id: UUID;
}

export interface ToggleCurrency {
  type: typeof TOGGLE_CURRENCY;
}

export interface ToggleModalIsOpen {
  type: typeof TOGGLE_MODAL_IS_OPEN;
  isOpen: boolean;
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
  AddItemToCart |
  RemoveItemFromCart |
  ToggleCurrency |
  ToggleModalIsOpen |
  SetOrder |
  SetUser
  )
