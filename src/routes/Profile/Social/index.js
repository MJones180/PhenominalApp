import React from 'react';
import Container from './container';
import Tabs from './Tabs';
import Content from './Content';

export default Container(({ activeTab, dataWrapper, ownProfile, tabClick }) => (
  <section>
    <Tabs activeTab={activeTab} tabClick={tabClick} />
    <Content activeTab={activeTab} dataWrapper={dataWrapper} ownProfile={ownProfile} />
  </section>
));
