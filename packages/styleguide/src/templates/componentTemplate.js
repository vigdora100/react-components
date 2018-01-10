import React from "react";
import styled from 'styled-components';
import { withPrefix } from "gatsby-link";
import 'github-markdown-css/github-markdown.css';

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

export default function ComponentTemplate({ pathContext }) {
  const { componentName } = pathContext;

  return (
    <Iframe src={withPrefix(`/iframes/${componentName}`)} />
  );
};
