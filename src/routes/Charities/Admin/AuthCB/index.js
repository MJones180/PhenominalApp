import React from 'react';
import Loading from 'components/Loaders/Spinner';
import Container from './container';

export default Container(() => <Loading inline text="Processing" />);
