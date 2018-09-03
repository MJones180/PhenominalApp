import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Privacy from '../Documents/Privacy';
import Terms from '../Documents/Terms';
import { TermsHeadTags, PrivacyHeadTags } from './headTags';
import styles from './index.css';

export default ({ url }) => (
  <section className={styles.container}>
    <Switch>
      <Route
        path={`${url}/terms`}
        component={() => (
          <div>
            <TermsHeadTags />
            <Terms />
          </div>
        )}
      />
      <Route
        path={`${url}/privacy`}
        component={() => (
          <div>
            <PrivacyHeadTags />
            <Privacy />
          </div>
        )}
      />
      <Route
        path="/"
        component={() => (
          <h4>
            Please select a document to view it.
          </h4>
        )}
      />
    </Switch>
  </section>
);
