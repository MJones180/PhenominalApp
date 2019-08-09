import React from 'react';
import Button from 'components/Button';
import Category from '../Category';
import Question from '../Question';
import Spacer from '../Spacer';
import styles from './index.css';

export default () => (
  <Category title="Account">
    <Question title="How do I create an account?">
      You can sign in with either Facebook or Google. If you do not already have an account, one will be created for you.
    </Question>
    <Question title="Worried someone may have access to your account?">
      Go to <Button to="/settings" className={styles.inlineButton}>Settings</Button>
      <Spacer />
      Click the <span className={styles.dangerText}>Sign out on all devices</span> button.
    </Question>
    <Question title="Where can I view my transaction history?">
      <Button to="/transactions">Transactions</Button>
      <Spacer />
      This button can also be found on your profile.
    </Question>
    <Question title="How do I change my information?">
      Changes to your information and preferences can be made in the Settings.
      <Spacer />
      <Button to="/settings">Settings</Button>
    </Question>
  </Category>
);
