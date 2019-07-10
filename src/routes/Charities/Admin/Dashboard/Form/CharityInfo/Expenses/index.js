import React from 'react';
import { MonthYearInput, PercentageInput } from 'components/Input';
import styles from './index.css';

export default () => (
  <div className={styles.container}>
    <h5 className={styles.title}>Expense percentage breakdown – where donations end up going.</h5>
    <div className={styles.expenses}>
      <PercentageInput name="expensesAdministrative" label="Administrative" placeholder="0.00%" className={styles.expense} />
      <PercentageInput name="expensesFundraising" label="Fundraising" placeholder="0.00%" className={styles.expense} />
      <PercentageInput name="expensesProgram" label="Program" placeholder="0.00%" className={styles.expense} />
      <PercentageInput name="expensesOther" label="Other" placeholder="0.00%" className={styles.expense} />
      <MonthYearInput name="expensesUpdated" label="Date Last Updated" placeholder="MM/YYYY" />
    </div>
  </div>
);
