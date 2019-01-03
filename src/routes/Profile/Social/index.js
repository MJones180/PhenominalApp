import React from 'react';
import Container from './container';
import Tabs from './Tabs';
import Content from './Content';

export default Container(({ activeTab, tabClick, ...contentOnlyProps }) => (
  <section>
    <Tabs activeTab={activeTab} tabClick={tabClick} />
    <Content activeTab={activeTab} {...contentOnlyProps} />
  </section>
));
