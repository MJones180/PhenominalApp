// =================================
// Numeral Number Functions
// =================================

import numeral from 'numeral';

// Displays as a comma separated number
export const comma = val => numeral(val).format('0,0');
// Value is passed in as pennies, displays as currency
export const currency = val => numeral(val / 100).format('$0,0.00');
// Displays as a percentage
export const percent = val => numeral(val).format('0.00%');
