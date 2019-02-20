/*
NAME
  Link [Component]
USAGE
  return <Link {...props} />
PROPS
  - external: [string] external routing
  - mail: [string] mailing
  - to: [string] internal routing
  - general: [bool] apply default styles
*/

import React from 'react';
import { Link } from 'react-router-dom';

export default ({ children, className, external, general, mail, to, ...passedProps }) => {
  // Determine if it should be a js 'Link' or html 'a'
  const Tag = to ? Link : 'a';
  // Apply general class if needed
  const props = {
    className: `${general && 'general'} ${className}`,
  };
  // Apply external link attributes
  if (external) {
    props.target = '_blank';
    props.rel = 'noopener noreferrer';
    props.href = external;
  }
  // Mail link
  if (mail) props.href = `mailto:${mail}`;
  // Internal Link
  if (to) props.to = to;
  return (
    <Tag {...props} {...passedProps}>
      {children}
    </Tag>
  );
};
