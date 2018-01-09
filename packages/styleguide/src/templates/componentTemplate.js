import React from "react";
import 'github-markdown-css/github-markdown.css';

export default function ComponentTemplate({ pathContext }) {
  const { componentName } = pathContext;

  return (
    <iframe src={`/iframes/${componentName}`} style={{ width: '100%', height: '100%' }} />
  );
};
