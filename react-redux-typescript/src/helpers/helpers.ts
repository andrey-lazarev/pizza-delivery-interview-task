import { Currency } from '../store/types/types';
import { DOLLAR_SIGN, EURO_SIGN } from '../components/constants';

export const appendClassNameModifier = (
  className: string,
  modifier: string,
): string => (
  modifier ? className + '--' + modifier : ''
)

export const combineClassNames = (
  ...classNames: string[]
): string => (
  classNames.join(' ')
)

export const mapCurrencyToSign: Record<Currency, typeof DOLLAR_SIGN | typeof EURO_SIGN> = {
  dollar: DOLLAR_SIGN,
  euro: EURO_SIGN
}
