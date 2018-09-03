import React from 'react';
import Loading from 'components/Loaders/Spinner';
import Verify from './Verify';
import Container from './container';
import Auth from './Auth';

export default Container(({ loading, newUser, setLoading, signin }) => {
  if (loading) return <Loading inline text="Processing" />;
  if (newUser) return <Verify data={newUser} setLoading={setLoading} />;
  return <Auth setLoading={setLoading} signin={signin} />;
});
