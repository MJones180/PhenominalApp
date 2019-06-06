import React from 'react';
import _ from 'lodash';
import { currency } from 'utils/number';

export default Component => (
  ({ balance, events, values }) => {
    const { amount, checkedEvent } = values;
    const selectedCharity = _.find(events, ({ id }) => id == checkedEvent);
    const charity = selectedCharity ? selectedCharity.name : undefined;
    const validAmount = amount != 0 && amount <= balance;
    const valid = charity && validAmount;
    let message;
    if (valid) {
      message = (
        <div>
          You will donate <span>{currency(amount)}</span> to <span>{charity}</span>.
        </div>
      );
    } else {
      let error;
      error = 'charity';
      if (!validAmount) {
        error = 'valid amount';
        if (!charity) {
          error = 'valid amount and charity';
        }
      }
      message = `Please select a ${error}.`;
    }
    return (
      <Component
        message={message}
        invalid={!valid}
      />
    );
  }
);
