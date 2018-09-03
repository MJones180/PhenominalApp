import React from 'react';
import GoogleLogin from 'react-google-login';
import { googleID } from 'utils/keys';
import Button from './Button';

const provider = 'Google';

export default ({ setLoading, signin }) => (
  <GoogleLogin
    clientId={googleID}
    onFailure={() => setLoading(false)}
    onRequest={() => setLoading(true)}
    onSuccess={({ tokenId }) => signin(provider, tokenId)}
    style={{}}
    tag="div"
  >
    <Button name={provider} />
  </GoogleLogin>
);
