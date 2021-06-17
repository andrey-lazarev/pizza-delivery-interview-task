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
export type Currency = 'dollar' | 'euro';

export type BaseEntity<O extends object> = {
  [id: string]: O;
}

export type User = BaseEntity<{
  name: string;
  pass?: string;
  address?: string;
  ordersHistory?: Order[];
}>

export type MenuItem = BaseEntity<{
  name: string;
  description: string;
  price: number;
  imageURL: string;
}>

export type Menu = MenuItem[];
export type CartItem = Omit<MenuItem, 'description' | 'imageURL'>;
export type Cart = CartItem[];
export type Order = Cart;

export type Form = {
}

export interface Modal {
  isOpen: boolean;
  form: Form;
}

export interface AppState {
  currency: Currency;
  user: User;
  menu: Menu;
  cart?: Cart;
  order?: Order;
  modal?: Modal;
}
