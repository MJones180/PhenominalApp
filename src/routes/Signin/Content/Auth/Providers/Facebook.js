import React from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { facebookID } from 'utils/keys';
import Button from './Button';

const provider = 'Facebook';

export default ({ setLoading, signin }) => (
  <FacebookLogin
    appId={facebookID}
    callback={({ accessToken }) => signin(provider, accessToken)}
    onFailure={() => setLoading(false)}
    render={({ onClick }) => (
      <Button
        click={() => {
          setLoading(true);
          onClick();
        }}
        name={provider}
      />
    )}
  />
);
