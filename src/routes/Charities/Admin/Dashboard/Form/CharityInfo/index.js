import React from 'react';
import Input, { Textarea, MonthYearInput, PercentageInput, PhoneNumberInput } from 'components/Input';
import styles from './index.css';

export default () => (
  <div>
    <h4 className={styles.bottomTitle}>Charity Information</h4>
    <div className={styles.flex}>
      <Input name="name" label="Name" className={styles.name} />
      <Input name="acronym" label="Acronym" className={styles.acronym} />
    </div>
    <Textarea name="mission" label="Mission" />
    <Input name="location" label="Location" placeholder="City, State Zip" />
    <PhoneNumberInput name="phoneNumber" label="Phone Number" placeholder="(000) 000-0000" />
    <Input name="website" label="Website URL" placeholder="https://example.com" />
    <div className={styles.expenses}>
      <h5 className={styles.expensesTitle}>Expense percentage breakdown of where donations end up going.</h5>
      <div className={styles.flex}>
        <PercentageInput name="expensesAdministrative" label="Administrative" placeholder="0.00%" className={styles.administrative} />
        <PercentageInput name="expensesFundraising" label="Fundraising" placeholder="0.00%" className={styles.fundraising} />
        <PercentageInput name="expensesProgram" label="Program" placeholder="0.00%" className={styles.program} />
        <PercentageInput name="expensesOther" label="Other" placeholder="0.00%" className={styles.other} />
        <MonthYearInput name="expensesUpdated" label="Date Last Updated" placeholder="MM/YYYY" className={styles.lastUpdated} />
      </div>
    </div>
  </div>
);
