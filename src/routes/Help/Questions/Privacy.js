import React from 'react';
import Button from 'components/Button';
import Category from '../Category';
import Question from '../Question';
import Spacer from '../Spacer';
import styles from './index.css';

export default () => (
  <Category title="Privacy">
    <Question title="Who can see my profile?">
      Anyone can see your profile unless you make it private.
      <Spacer />
      Change in <Button to="/settings" className={styles.inlineButton}>Settings</Button>
    </Question>
    <Question title="What information on my profile is visible?">
      With the exception of your donations and balance, everything on your profile is visible.
    </Question>
  </Category>
);
