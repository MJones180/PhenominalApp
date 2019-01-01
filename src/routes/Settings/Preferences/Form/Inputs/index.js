import React from 'react';
import Checkbox from 'components/Checkbox';

export default () => (
  <div>
    <Checkbox
      label="Allow Donation Confirmation Emails"
      name="allowDonationEmails"
    />
    <Checkbox
      label="Allow Anyone To View Your Profile"
      name="publicProfile"
    />
    <p>Donation amounts and transactions are still hidden.</p>
  </div>
);
