import React from 'react';
import _ from 'lodash';
import questions from './data';
import Question from '../Question';

export default () => (
  _.map(questions, ({ title, content }, index) => (
    <Question key={index} title={title} content={content} />
  ))
);
