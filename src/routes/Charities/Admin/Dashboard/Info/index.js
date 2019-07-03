import React from 'react';
import { Form } from 'formik';
import Dropzone from 'react-dropzone';
import { image } from 'utils/endpoints';
import Button from 'components/Button';
import Input, { Textarea, MonthYearInput, PercentageInput, PhoneNumberInput } from 'components/Input';
import Container from './container';
import styles from './index.css';

export default Container(() => (
  <Form>
    <div className={styles.top}>
      <div>
        <h4> <span className={styles.topText}>EIN:</span> <span className={styles.ein}>36-3241033</span></h4>
        <h4 className={styles.verified}>Verified</h4>
      </div>
      <div className={styles.topRight}>
        <h4><span className={styles.topText}>Created:</span> 2/3/2019</h4>
        <h4><span className={styles.topText}>Updated:</span> 2/3/2019</h4>
      </div>
    </div>

    <div className={styles.bottom}>
      <div className={styles.leftColumn}>

        <h4 className={styles.bottomTitle}>Charity Information</h4>
        <div className={styles.flex}>
          <Input name="name" label="Name" className={styles.name} />
          <Input name="acronym" label="Acronym" className={styles.acronym} />
        </div>
        <Textarea name="mission" label="Mission" />
        <Input name="location" label="Location" />
        <PhoneNumberInput name="phoneNumber" label="Phone Number" placeholder="(000) 000-0000" />
        <Input name="website" label="Website URL" />
        <div className={styles.expenses}>
          <h5 className={styles.expensesTitle}>Expense percentage breakdown of where donations end up going.</h5>
          <div className={styles.flex}>
            <PercentageInput name="expensesAdministrative" label="Administrative" placeholder="0.00%" className={styles.administrative} />
            <PercentageInput name="expensesFundraising" label="Fundraising" placeholder="0.00%" className={styles.fundraising} />
            <PercentageInput name="expensesProgram" label="Program" placeholder="0.00%" className={styles.program} />
            <PercentageInput name="expensesOther" label="Other" placeholder="0.00%" className={styles.other} />
            <MonthYearInput name="expensesUpdated" label="Date Last Updated" placeholder="MM/YYYY" className={styles.lastUpdated} />
          </div>
        </div>

        <h4 className={styles.bottomTitle}>Account Information</h4>
        <Input name="email" label="Email" />
        <Input name="representative" label="Representative" />

      </div>

      <div className={styles.rightColumn}>

        <h4 className={styles.bottomTitle}>Stripe Account</h4>
        <Button className={styles.stripe} onClick={() => {}}>
          Connect Account
        </Button>

        <h4 className={styles.bottomTitle}>Banner</h4>
        <Dropzone accept="image/jpeg, image/png" multiple={false}>
          {({ getRootProps, getInputProps, isDragActive }) => (
            <div {...getRootProps()} className={`${!false && styles.dropzone} ${isDragActive && styles.activeDropzone}`}>
              <input {...getInputProps()} />
              <img src={image('charities/banners/11-1111111.jpg')} alt={'11-1111111'} className={styles.banner} />
              {!false && <p className={styles.uploadHover}> Upload </p>}
            </div>
          )}
        </Dropzone>
        <Input name="bannerCredit" label="Banner Credit" />

        <h4 className={styles.bottomTitle}>Logo</h4>
        <Dropzone accept="image/jpeg, image/png" multiple={false}>
          {({ getRootProps, getInputProps, isDragActive }) => (
            <div {...getRootProps()} className={`${!false && styles.dropzone} ${isDragActive && styles.activeDropzone}`}>
              <input {...getInputProps()} />
              <img src={image('charities/logos/59-3097333.png')} alt={'59-3097333'} className={styles.logo} />
              {!false && <p className={styles.uploadHover}> Upload </p>}
            </div>
          )}
        </Dropzone>

      </div>
    </div>
  </Form>
));
