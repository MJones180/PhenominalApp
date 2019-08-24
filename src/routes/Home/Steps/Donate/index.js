import React from 'react';
import { image } from 'utils/endpoints';
import Coin from './Coin';
import styles from './index.css';

export default () => (
  <div className={styles.container}>
    <div className={styles.content}>
      <div className={styles.title}>
        <h2>2</h2>
        <h3 className="general">
          Donate
        </h3>
      </div>
      <Coin />
      <p className={`large ${styles.text}`}>
        Now that you&apos;ve added funds to your Phenominal account, you can make donations of any amount, even one cent!
        Since Stripe processing fees were already deducted while adding funds, donations go directly to the charity.
        Penny for penny.
      </p>
    </div>
    <img src={image('assets/Home/DonateMockup.png')} className={styles.mockup} alt="Donate Mockup" />
  </div>
);
