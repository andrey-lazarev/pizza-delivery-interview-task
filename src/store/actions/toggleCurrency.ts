import { TOGGLE_CURRENCY } from './constants';
import { ToggleCurrency } from './types';

export const toggleCurrency = (
): ToggleCurrency => ({
  type: TOGGLE_CURRENCY
});
