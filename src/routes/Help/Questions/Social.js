import React from 'react';
import Dots from 'components/Dots';
import Link from 'components/Link';
import Loops from 'components/Loops';
import Category from '../Category';
import Question from '../Question';
import Spacer from '../Spacer';
import styles from './index.css';

export default () => (
  <Category title="Social">
    <Question title="What are Loops?">
      <div className={styles.flex}>
        <Loops count={314} />
      </div>
      <Spacer />
      Loops are a show of dedication. For each continuous day that you make a donation your Loop score will be increased by one. Failure to donate on a day will reset your Loop score.
    </Question>
    <Question title="What are Ranks?">
      Ranks are received when you reach certain Loop scores. They are a show of prestige and grant a Dot multiplier. They are displayed around profile pictures.
    </Question>
    <Question title="What are Halos?">
      Halos are achieved when completing certain actions. They grant Dot rewards upon completion and display a badge on your profile.
      <Spacer />
      You can view all of the Halos <Link general to="/halos">Here</Link>.
    </Question>
    <Question title="What are Dots?">
      <div className={styles.flex}>
        <Dots total={314} />
      </div>
      <Spacer />
      Dots are a numerical value that represents your Phenominal usage. They can be gained by donating and completing Halos.
    </Question>
    <Question title="What is a Circle?">
      A Circle is a social group that provides a medium to view your friends in one place.
    </Question>
    <Question title="Can I invite my friends?">
      Yes! You can invite your friends by email <Link general to="/friend-invite">Here</Link>.
    </Question>
    <Question title="How do I follow a charity?">
      To follow a charity simply click the <span className={styles.specialText}>Follow</span> button on their page.
    </Question>
  </Category>
);
