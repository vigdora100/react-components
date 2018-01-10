import React from "react";
import { Title, PublishDate } from '../components';
import 'github-markdown-css/github-markdown.css';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  return (
    <div>
      <div>
        <Title>{frontmatter.title}</Title>
        <PublishDate>{frontmatter.date}</PublishDate>
        <hr />
        <div
          className="markdown-body"
          style={{ marginTop: 16 }}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
