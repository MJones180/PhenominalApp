import React from 'react';
import HeadTags from './headTags';
import Donation from './Donation';
import Dots from './Dots';
import Footer from './Footer';
import Header from './Header';
import Loops from './Loops';
import Container from './container';
import styles from './index.css';

export default Container(({ amount, balance, charityName, date, dotTotal, dotsGained, loopCount, loopGained, transactionID }) => (
  <section className={styles.container}>
    <HeadTags />
    <Header date={date} />
    <Donation amount={amount} balance={balance} charityName={charityName} />
    <Dots dotTotal={dotTotal} dotsGained={dotsGained} />
    {loopGained && <Loops loopCount={loopCount} loopGained={loopGained} />}
    <Footer transactionID={transactionID} />
  </section>
));
