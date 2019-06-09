import React from 'react';
import HeadTags from './headTags';
import Expiration from './Expiration';
import Footer from './Footer';
import Funds from './Funds';
import Header from './Header';
import Container from './container';
import styles from './index.css';

export default Container(({ amountCharged, amountReceived, balance, date, expiration, transactionID }) => (
  <section className={styles.container}>
    <HeadTags />
    <Header date={date} />
    <Funds amountCharged={amountCharged} amountReceived={amountReceived} balance={balance} />
    <Expiration expiration={expiration} />
    <Footer transactionID={transactionID} />
  </section>
));
