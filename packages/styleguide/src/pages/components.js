import React from 'react';
// import Link from 'gatsby-link';
import { Title, Link } from '../components';

const ComponentsPage = ({ data }) => (
  <div>
    <Title>This is the components homepage</Title>
    <p>Will probably be a simple splashscreen</p>
    <h2>Components</h2>
    <ul>
      {data.allDirectory.edges.map((edge, index) => (
        <li key={index}>
          <Link to={`/components/${edge.node.name}`}>@zendeskgarden/react-{edge.node.name}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default ComponentsPage;

export const query = graphql`
  query Components {
    allDirectory(filter: {sourceInstanceName: { ne: "markdown-pages" }, relativeDirectory: {eq: ".."}, relativePath: {ne: "styleguide"}}) {
      totalCount
      edges {
        node {
          name,
          absolutePath,
        }
      }
    }
  }
`;
