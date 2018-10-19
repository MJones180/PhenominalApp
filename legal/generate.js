// Execute: yarn genLegal PATH VERSION OUTPUT
// - PATH: Relative to current file
// - VERSION: Name of file
// - OUTPUT: Relative to package.json
// Example: yarn genLegal ./terms 2.0 ./src/routes/Legal/Documents/Terms.js

const fs = require('fs');
const _ = require('lodash');

// Passed in args
const [,, path, version, output] = process.argv;

// The source document
const sourceFile = `${__dirname}/${path}/${version}.txt`;
const sourceData = fs.readFileSync(sourceFile, 'utf8');

// First line is the title of the document
// Second line is the date it was last updated
// All other lines are the contents
// Converts file to string and breaks it at every line
const [title, lastUpdated, ...data] = sourceData.toString().split('\n');

// Shorthand syntax that should be converted into React
const transformations = {
  '-------': () => '<hr />',
  '#': data => `<h3> ${data} </h3>`,
  '##': data => `<h4> ${data} </h4>`,
  '>': data => `<p className="large"> ${data} </p>`,
  '/*': () => '<ul>',
  '*': data => `  <li><p className="large"> ${data} </p></li>`,
  '*/': () => '</ul>',
};

// Inline variables that should be replaced with React
const replacements = {
  email: '<a className="general" href="mailto:support@phenominal.fund">support@phenominal.fund</a>',
  google_analytics: '<a target="_blank" rel="noopener noreferrer" className="general" href="https://www.google.com/analytics/terms/us.html">Google Analytics</a>',
  privacy: '<Link className="general" to="/legal/privacy">Privacy Policy</Link>',
  stripe_terms: '<a target="_blank" rel="noopener noreferrer" className="general" href="https://stripe.com/us/legal">terms of service</a>',
  terms: '<Link className="general" to="/legal/terms">Terms of Service</Link>',
};

// The base template for the new file
const template = ({ content, date }) => (`
// Automatically generated on ${date}
// Do not edit this file directly
// Version ${version}

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.css';

export default () => (
  <div className={styles.container}>
    <div className={styles.header}>
      <h2 className={styles.title}>
        ${title}
      </h2>
      <h5>
        Last Modified: ${lastUpdated}
      </h5>
    </div>
    ${content}
  </div>
);
`);

// Lines of content for the new file
const templateContent = [];

// Loop through every line of the source data
_.each(data, (value) => {
  // See if the line actually contains text
  if (value) {
    // Grab the index of the first space
    const space = value.indexOf(' ');
    // Grab the transformation if there is one
    // Use the value if there is no space
    const transform = value.substr(0, space) || value;
    // Grab the content - everything after the first space
    let content = value.substr(space + 1);
    // Loop through each of the replacements
    _.each(replacements, (replacement, identifier) => {
      // Replace each of the inline variables as they appear
      content = _.replace(content, `{{ ${identifier} }}`, replacement);
    });
    // Push the line to the new file's contents
    templateContent.push(transformations[transform](content));
  }
});

// Generate the complete file
const content = template({
  // Join together each line of content by a new line and four spaces
  content: templateContent.join('\n    '),
  // The current time
  date: new Date().toLocaleString(),
});

// Write the new complete file (trims off the starting white space)
fs.writeFile(output, _.trimStart(content), err => console.log(err || 'File Generated'));
