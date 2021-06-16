import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';

export type GetState = () => AppState;

export type Dispatch = ThunkDispatch<unknown, unknown, Action>;

export type ThunkAction = (
  dispatch: Dispatch,
  getState: GetState
) => void;

export type MenuMockUp = {
  name: string,
  description: string
}[];

export type UUID = string;

export type Currency = 'dollar' | 'euro'

export interface User {
}

export interface Menu {
}

export interface Cart {
}

export interface Order {
}

export interface Modal {
}

export interface AppState {
  currency: Currency;
  user: User;
  menu: Menu;
  cart?: Cart;
  order?: Order;
  modal?: Modal;
}

