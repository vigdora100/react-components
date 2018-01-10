import React from 'react';
import { Title, Link } from '../components';

const DocumentationPage = ({ data }) => (
  <div>
    <Title>Documentation Homepage Example</Title>
    <p>Example documentation homepage</p>
    <ul>
      {data.allMarkdownRemark.edges.map((edge, index) => (
        <li key={index}>
          <Link to={edge.node.frontmatter.path}>{edge.node.frontmatter.title}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default DocumentationPage;

export const query = graphql`
  query Documentation {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000,
      filter: {
        frontmatter: {
          path: {
            regex: "/documentation/"
          }
        }
      }
    ) {
      edges {
        node {
          frontmatter {
            date
            path
            title
          }
        }
      }
    }
  }
`;
