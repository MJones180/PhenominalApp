import React from 'react';
import { image } from 'utils/endpoints';
import { Helmet } from 'react-helmet';

const description = 'A medium to make donations of any domination to a various assortment of charities.';
const logo = image('logos/logoFull.png');
const url = 'https://phenominal.fund';

export default () => (
  <Helmet>
    <link rel="author" content="Michael Jones" />
    <link rel="canonical" href={url} />
    <link href="https://fonts.googleapis.com/css?family=Muli:200,400,700" rel="stylesheet" />
    <meta charSet="utf-8" />
    <meta name="description" content={description} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Phenominal: Small Donation. Big Change.</title>

    { /** Facebook */ }
    <meta property="og:description" content={description} />
    <meta property="og:image" content={logo} />
    <meta property="og:site_name" content="Phenominal" />
    <meta property="og:url" content={url} />

    { /** Google */ }
    <meta itemProp="description" content={description} />
    <meta itemProp="image" content={logo} />

    { /** Twitter */ }
    <meta name="twitter:card" content="app" />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={logo} />
    <meta name="twitter:url" content={url} />
  </Helmet>
);
