import React from 'react';
import Button from 'components/Button';
import Link from 'components/Link';
import Loops from 'components/Loops';
import Category from '../Category';
import Question from '../Question';
import styles from './index.css';

export default () => (
  <div className={styles.container}>
    <div className={styles.column}>
      <Category title="General">
        <Question title="What is Phenominal?">
          Phenominal is a platform for making donations of any domination to a various assortment of charities.
        </Question>
        <Question title="Are there any fees to use Phenominal?">
          No. Phenominal is 100% free, there are absolutely no fees when using Phenominal.
        </Question>
        <Question title="How does Phenominal make money?">
          Phenominal does not make any money, it was created for the sole purpose of allowing anyone to donate.
        </Question>
        <Question title="What is the donating process?">
          Donating is simple, it is 3 easy steps: Add Funds, Donate, Create Change.
        </Question>
      </Category>
      <Category title="Funds">
        <Question title="How do I add funds to my account?">
          Adding funds can be accomplished by clicking on the various <Button to="add-funds" special className={styles.inline}>Add Funds</Button> buttons throughout the site. Lets see how this looks on the next line as well.
        </Question>
        <Question title="What is Stripe?">
          Stripe is a payment processing service that Phenominal utilizes to add funds to your account. You can find out more about Stripe <Link general external="https://stripe.com">Here</Link>.
        </Question>
      </Category>
      <Category title="Donations">
        <Question title="How do I donate?">
          You must first add funds to your account. Then you can donate to any active event.
        </Question>
        <Question title="Does Phenominal keep any portion of my donation?">
          No. Phenominal donates 100% of all donations received.
        </Question>
        <Question title="How will my donation be used?">
          Donations will be appropriated by each charity at their own discretion.
        </Question>
        <Question title="What is the minimum donation?">
          There isn't one. You can make donations of one penny ($0.01).
        </Question>
        <Question title="Can I do recurring donations?">
          No, at the moment donation subscriptions are not possible. This feature will be added in the future. Sorry for any inconveniences.
        </Question>
        <Question title="What can I donate to?">
          You can donate to any event, or, an active charity in the rotation or a special fundraiser.
        </Question>
      </Category>
      <Category title="Account">
        <Question title="Worried someone may have access to your account?">
          Go to your settings page and click the "Sign out on all devices" button.
        </Question>
        <Question title="Where can I view my transaction history?">
          You can view your transactions by clicking on the "Transactions" button on your profile. Alternatively you can go directly to **/transactions**.
        </Question>
        <Question title="How do I change my information?">
          Your profile information and preferences be edited from the **/settings** page.
        </Question>
      </Category>
    </div>
    <div className={styles.column}>
      <Category title="Social">
        <Question title="What are Loops?">
          <Loops count={314} /> Loops are a show of dedication. For each continuous day that you make a unique donation (first donation to an event) your Loop score will be increased by one. Failure to donate on a day will reset your Loop score.
        </Question>
        <Question title="What are Ranks?">
          **SHOW IMAGE** Ranks are received when you reach certain Loop scores. They are a show of prestige and grant a Dot multiplier. The ranks are: ...
        </Question>
        <Question title="What are Halos?">
          Halos are achieved when completing certain actions. They grant Dot bonuses and badges on your profile. You can view all of the Halos at **/halos**.
        </Question>
        <Question title="What are Dots?">
          **SHOW IMAGE** Dots are a numerical value that represents your Phenominal usage. They can be gained by donating and completing Halos.
        </Question>
        <Question title="What is a Circle?">
          A Circle is an easy way to see other users and form social groups.
        </Question>
        <Question title="Can I invite my friends?">
          Yes! You can invite your friends by email from the **/friend-invite** page.
        </Question>
        <Question title="How do I follow a charity?">
          To follow a charity simply click on the "Follow" button on their page.
        </Question>
      </Category>
      <Category title="Charities">
        <Question title="How can I view more information about a charity?">
          You can view the charity's page which is accessible from the <Button className={styles.inline}>View Charity</Button> button.
        </Question>
        <Question title="Want to donate to a charity you don't see?">
          Feel free to suggest it **here**. Hopefully we can add it to the charity rotation.
        </Question>
        <Question title="What are all of the charities Phenominal supports?">
          A list of all charities Phenominal supports can be found **here**.
        </Question>
        <Question title="How does the charity rotation work?">
          Every Thursday at 12:01 AM (UTC) [8:01 PM (EST)] different charities will be available open for donations. Along with this, the current charities will no longer be up for donations.
        </Question>
      </Category>
      <Category title="Special Fundraiser">
        <Question title="What is a special fundraiser?">
          During natural disasters or times of need a special fundraiser may be started to support the relief effort.
        </Question>
      </Category>
      <Category title="Privacy">
        <Question title="Who can see my profile?">
          Anyone can see your profile unless you make it private (which can be done from the **/settings** page).
        </Question>
        <Question title="What information on my profile is visible?">
          Everything on your profile is visible except your transactions, donation stats, and balance.
        </Question>
      </Category>
    </div>
  </div>
);
