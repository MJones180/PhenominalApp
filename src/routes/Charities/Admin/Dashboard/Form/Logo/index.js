import React from 'react';
import ImageUpload from '../ImageUpload';
import Title from '../Title';

export default ({ logo, setFieldValue }) => (
  <div>
    <Title>Logo</Title>
    <ImageUpload field="logo" image={logo} setFieldValue={setFieldValue} />
  </div>
);
