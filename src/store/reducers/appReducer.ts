import { AppState } from '../types/types';
import { AppAction } from '../actions/types';
import { getInitialState } from './constants';

export const appReducer = (
  state: AppState = getInitialState(),
  action: AppAction,
): AppState => {
  switch (action.type) {
    case 'TOGGLE_CURRENCY': {
      return {
        ...state,
        currency: state.currency === 'dollar' ? 'euro' : 'dollar',
      };
    }
    default: {
      return state;
    }
  }
};
