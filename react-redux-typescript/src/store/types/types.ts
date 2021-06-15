import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';

export type TGetState = () => IAppState;

export type Dispatch = ThunkDispatch<unknown, unknown, Action>

export type ThunkAction = (
  dispatch: Dispatch,
  getState: TGetState
) => void;

export type TMenuMockUp = {
  name: string,
  description: string
}[]

export enum ECurrency {
  dollar = 'dollar',
  euro = 'euro',
}

export interface IUser {
}

export interface IMenu {
}

export interface ICart {
}

export interface IOrder {
}

export interface IModal {
}

export interface IAppState {
  currency: ECurrency;
  user: IUser;
  menu: IMenu;
  cart?: ICart;
  order?: IOrder;
  modal?: IModal;
}