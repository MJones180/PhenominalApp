import React from 'react';
import { Link } from 'react-router-dom';
import Dots from 'components/Dots';
import Container from './container';
import styles from './index.css';

const LinkWrapper = ({ children, link }) => {
  const Tag = link ? Link : 'div';
  return (
    <Tag to={link} className={styles.container}>
      {children}
    </Tag>
  );
};

const Gained = ({ dots }) => (
  <div className={styles.dots}>
    <h5>Gained:</h5>
    <Dots total={dots} />
  </div>
);

export default Container(({ dots, link, message, title }) => (
  <LinkWrapper link={link}>
    <h4 className="general"> {title} </h4>
    <p className="large"> {message} </p>
    { !!dots && <Gained dots={dots} /> }
  </LinkWrapper>
));
