import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './asyncRoute';

export default () => (
  <Switch>
    <Route
      exact
      path="/"
      mod={() => import(/* webpackChunkName: "Home" */ './Home')}
    />
    <Route
      exact
      path="/about"
      mod={() => import(/* webpackChunkName: "About" */ './About')}
    />
    <Route
      exact
      path="/add-funds"
      requireAuth
      mod={() => import(/* webpackChunkName: "AddFunds" */ './AddFunds')}
    />
    <Route
      exact
      path="/balance"
      requireAuth
      mod={() => import(/* webpackChunkName: "Balance" */ './Balance')}
    />
    <Route
      exact
      path="/charities"
      mod={() => import(/* webpackChunkName: "CharitiesLanding" */ './Charities/Landing')}
    />
    <Route
      exact
      path="/charities/admin"
      mod={() => import(/* webpackChunkName: "CharitiesAdmin" */ './Charities/Admin/Dashboard')}
    />
    <Route
      exact
      path="/charities/admin/auth/cb/:token"
      mod={() => import(/* webpackChunkName: "CharitiesAdminAuthCB" */ './Charities/Admin/AuthCB')}
    />
    <Route
      exact
      path="/charities/admin/signin"
      mod={() => import(/* webpackChunkName: "CharitiesAdminSignin" */ './Charities/Admin/Signin')}
    />
    <Route
      exact
      path="/charities/admin/signup"
      mod={() => import(/* webpackChunkName: "CharitiesAdminSignup" */ './Charities/Admin/Signup')}
    />
    <Route
      exact
      path="/charities/admin/stripe/cb"
      mod={() => import(/* webpackChunkName: "CharitiesAdminStripeCB" */ './Charities/Admin/StripeCB')}
    />
    <Route
      exact
      path="/charities/all"
      mod={() => import(/* webpackChunkName: "CharitiesAll" */ './Charities/All')}
    />
    <Route
      exact
      path="/charities/suggest"
      mod={() => import(/* webpackChunkName: "CharitiesSuggest" */ './Charities/Suggest')}
    />
    <Route
      exact
      path="/charities/:charityEIN"
      mod={() => import(/* webpackChunkName: "CharitiesCharity" */ './Charities/Charity')}
    />
    <Route
      exact
      path="/circles/create"
      requireAuth
      mod={() => import(/* webpackChunkName: "CirclesCreate" */ './Circles/Create')}
    />
    <Route
      exact
      path="/circles/:circleID"
      mod={() => import(/* webpackChunkName: "CirclesCircle" */ './Circles/Circle')}
    />
    <Route
      exact
      path="/contact"
      mod={() => import(/* webpackChunkName: "Contact" */ './Contact')}
    />
    <Route
      exact
      path="/donate/:eventID?"
      requireAuth
      mod={() => import(/* webpackChunkName: "Donate" */ './Donate')}
    />
    <Route
      exact
      path="/friend-invite"
      requireAuth
      mod={() => import(/* webpackChunkName: "FriendInvite" */ './FriendInvite')}
    />
    <Route
      exact
      path="/halos"
      mod={() => import(/* webpackChunkName: "Halos" */ './Halos')}
    />
    <Route
      exact
      path="/help"
      mod={() => import(/* webpackChunkName: "Help" */ './Help')}
    />
    <Route
      path="/legal"
      mod={() => import(/* webpackChunkName: "Legal" */ './Legal')}
    />
    <Route
      exact
      path="/profile/:username?"
      mod={() => import(/* webpackChunkName: "Profile" */ './Profile')}
    />
    <Route
      exact
      path="/settings"
      requireAuth
      mod={() => import(/* webpackChunkName: "Settings" */ './Settings')}
    />
    <Route
      exact
      path="/signin"
      mod={() => import(/* webpackChunkName: "Signin" */ './Signin')}
    />
    <Route
      exact
      path="/transactions"
      requireAuth
      mod={() => import(/* webpackChunkName: "Transactions" */ './Transactions')}
    />
    <Route
      path="/"
      mod={() => import(/* webpackChunkName: "NotFound" */ './NotFound')}
    />
  </Switch>
);
