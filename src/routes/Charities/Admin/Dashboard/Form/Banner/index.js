import React from 'react';
import Input from 'components/Input';
import ImageUpload from '../ImageUpload';
import Title from '../Title';
import styles from './index.css';

export default ({ banner, setFieldValue }) => (
  <div>
    <Title>Banner</Title>
    <p className={`${styles.recommended} large`}>Recommended resolution 2000x1200px.</p>
    <ImageUpload field="banner" image={banner} setFieldValue={setFieldValue} />
    <Input name="bannerCredit" label="Banner Credit" />
  </div>
);
