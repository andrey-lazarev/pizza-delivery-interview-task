import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  SET_MODAL_IS_OPEN,
  SET_ORDER,
  SET_USER,
  TOGGLE_CURRENCY,
} from './constants';
import { IOrder, IUser, TStrId } from '../types/types';

export interface IAddToCartAction {
  type: typeof ADD_ITEM_TO_CART;
  id: TStrId;
}

export interface IRemoveFromCartAction {
  type: typeof REMOVE_ITEM_FROM_CART;
  id: TStrId;
}

export interface IToggleCurrencyAction {
  type: typeof TOGGLE_CURRENCY;
}

export interface ISetModalIsOpenAction {
  type: typeof SET_MODAL_IS_OPEN;
  isOpen: boolean;
}

export interface ISetOrderAction {
  type: typeof SET_ORDER;
  order: IOrder;
}

export interface ISetUserAction {
  type: typeof SET_USER;
  user: IUser;
}

export type TAppAction = (
  IAddToCartAction |
  IRemoveFromCartAction |
  IToggleCurrencyAction |
  ISetModalIsOpenAction |
  ISetOrderAction |
  ISetUserAction
  )
