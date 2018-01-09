import React from "react";
import { withPrefix } from "gatsby-link";
import 'github-markdown-css/github-markdown.css';

export default function ComponentTemplate({ pathContext }) {
  const { componentName } = pathContext;

  return (
    <iframe src={withPrefix(`/iframes/${componentName}`)} style={{ width: '100%', height: '100%' }} />
  );
};
