import React from 'react';
import { CurrencySignComponentOwnProps } from './types';
import { mapCurrencyToSign } from '../../helpers/helpers';

export const CurrencySignComponent = (
	{ currency }: CurrencySignComponentOwnProps
) => (
	<span dangerouslySetInnerHTML={ { __html: `${ mapCurrencyToSign[currency] }` } }/>
)
