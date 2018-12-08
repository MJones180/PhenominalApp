import React from 'react';
import { currentUser } from 'utils/auth/user';

export default Component => currentUser(
  ({ handleSubmit, setFieldValue, user, values }) => {
    const { amount } = values;
    const submit = (token) => {
      // Information necessary to process the funds addition
      setFieldValue('submitData', {
        amount,
        token: token.id,
      });
      // Submit the form
      handleSubmit();
    };
    return (
      <Component
        amount={amount}
        email={user.email}
        submit={submit}
      />
    );
  }
);
