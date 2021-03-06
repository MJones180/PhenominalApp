import 'styles/framework';
import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import store from 'utils/redux';
import history from 'utils/history';
import Routes from 'routes';
import Analytics from './Analytics';
import AuthWrapper from './AuthWrapper';
import BrowserCompatibility from './BrowserCompatibility';
import ErrorBoundary from './ErrorBoundary';
import HeadTags from './HeadTags';
import LegalNotice from './LegalNotice';
import LoadActions from './LoadActions';
import ScrollToTop from './ScrollToTop';
import styles from './index.css';
import Header from './Header';
import Footer from './Footer';

export default () => (
  <BrowserCompatibility>
    <ErrorBoundary>
      <Provider store={store}>
        <Router history={history}>
          <ScrollToTop>
            <AuthWrapper>
              <Analytics />
              <HeadTags />
              <ToastContainer />
              <LoadActions />
              <div className={styles.wrapper}>
                <Header />
                <ErrorBoundary>
                  <Routes />
                </ErrorBoundary>
                <Footer />
              </div>
              <LegalNotice />
            </AuthWrapper>
          </ScrollToTop>
        </Router>
      </Provider>
    </ErrorBoundary>
  </BrowserCompatibility>
);
