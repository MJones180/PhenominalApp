import React from 'react';
import { Form } from 'formik';
import Container from './container';
import AccountInfo from './AccountInfo';
import Banner from './Banner';
import CharityInfo from './CharityInfo';
import Logo from './Logo';
import Submit from './Submit';
import styles from './index.css';

export default Container(({ values, setFieldValue }) => (
  <section className={styles.container}>
    <Form>
      <div className={styles.columns}>
        <div className={styles.leftColumn}>
          <CharityInfo />
          <AccountInfo />
        </div>
        <div className={styles.rightColumn}>
          <Banner banner={values.banner} setFieldValue={setFieldValue} />
          <Logo logo={values.logo} setFieldValue={setFieldValue} />
        </div>
      </div>
      <Submit />
    </Form>
  </section>
));
