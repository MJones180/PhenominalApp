import React from 'react';
import Link from 'components/Link';
import Category from '../Category';
import Question from '../Question';
import Spacer from '../Spacer';
import styles from './index.css';

export default () => (
  <Category title="Charities">
    <Question title="How can I view more information about a charity?">
      When a charity is active, click on the <span className={styles.specialText}>View charity</span> button.
      <Spacer />
      Alternatively, look up the charity <Link general to="/charities/all">here</Link>.
    </Question>
    <Question title="Want to donate to a charity you don't see?">
      Feel free to suggest it <Link general to="/charities/suggest">here</Link>. Hopefully we can add it to the charity rotation.
    </Question>
    <Question title="What are all of the charities Phenominal supports?">
      View a list of all of the charities <Link general to="/charities/all">here</Link>.
    </Question>
    <Question title="How does the charity rotation work?">
      Every Thursday at 8:01 PM EST new charities will open for donations and current charities will close.
    </Question>
  </Category>
);
