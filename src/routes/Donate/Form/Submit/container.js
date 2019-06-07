import React from 'react';
import _ from 'lodash';
import { currency } from 'utils/number';

export default Component => (
  ({ balance, events, values }) => {
    // Form data
    const { amount, checkedEvent } = values;
    // The selected event's charity
    const selectedCharity = _.find(events, ({ id }) => id == checkedEvent);
    // The charity's name if an event is selected
    const charity = selectedCharity ? selectedCharity.name : undefined;
    // Valid amount is 1 -> balance
    const validAmount = amount != 0 && amount <= balance;
    // Valid if both amount and charity are selected
    const valid = charity && validAmount;
    // The message to display
    let message;
    if (valid) {
      // Confirmation message
      message = (
        <div>
          You will donate <span>{currency(amount)}</span> to <span>{charity}</span>.
        </div>
      );
    } else {
      let error;
      // Amount and charity needs to be set
      if (!validAmount && !charity) error = 'valid amount and charity';
      // Amount needs to be set
      else if (!validAmount) error = 'valid amount';
      // Charity needs to be set
      else error = 'charity';
      // Error message
      message = `Please select a ${error}.`;
    }
    return <Component message={message} invalid={!valid} />;
  }
);
