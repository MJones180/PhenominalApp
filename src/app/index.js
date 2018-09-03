import 'styles/framework/index.css';
import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import store from 'utils/redux';
import history from 'utils/history';
import Routes from 'routes';
import AuthWrapper from './AuthWrapper';
import HeadTags from './headTags';
import ScrollToTop from './ScrollToTop';
import ErrorBoundary from './ErrorBoundary';
import LegalNotice from './LegalNotice';
import styles from './index.css';
import Header from './Header';
import Footer from './Footer';

export default () => (
  <ErrorBoundary>
    <Provider store={store}>
      <Router history={history}>
        <ScrollToTop>
          <AuthWrapper>
            <HeadTags />
            <ToastContainer />
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
);
