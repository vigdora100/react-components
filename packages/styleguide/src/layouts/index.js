import React from 'react'
import PropTypes from 'prop-types'
import Link, { navigateTo } from 'gatsby-link'
import Helmet from 'react-helmet'

import { Chrome, Nav, NavItem, NavItemText, NavItemIcon, Body, Content,
  Main, Header, Sidebar } from 'garden-react-chrome';
import ZendeskIcon from '@zendesk/garden-svg-icons/src/26-zendesk.svg';
import HomeIcon from '@zendesk/garden-svg-icons/src/26-home-fill.svg';
import DocumentationIcon from '@zendesk/garden-svg-icons/src/26-book.svg';
import AppIcon from '@zendesk/garden-svg-icons/src/26-app.svg';
import SettingsIcon from '@zendesk/garden-svg-icons/src/26-settings-fill.svg';

import './index.css'

const Navigation = ({ location }) => {
  return (
    <Nav>
      <NavItem logo>
        <NavItemIcon>
          <ZendeskIcon />
        </NavItemIcon>
        <NavItemText>Connect</NavItemText>
      </NavItem>
      <NavItem
        title="Home"
        onClick={() => navigateTo('/')}
        current={location.pathname === '/'}>
        <NavItemIcon>
          <HomeIcon />
        </NavItemIcon>
        <NavItemText>Home</NavItemText>
      </NavItem>
      <NavItem
        title="Documentation"
        onClick={() => navigateTo('/documentation')}
        current={location.pathname.indexOf('/documentation') !== -1}>
        <NavItemIcon>
          <DocumentationIcon />
        </NavItemIcon>
        <NavItemText>Documentation</NavItemText>
      </NavItem>
      <NavItem
        title="Components"
        onClick={() => navigateTo('/components')}
        current={location.pathname.indexOf('/components') !== -1}>
        <NavItemIcon>
          <AppIcon />
        </NavItemIcon>
        <NavItemText>Components</NavItemText>
      </NavItem>
    </Nav>
  )};

const DocumentationSidebar = ({ data, location }) => {
  if (location.pathname.indexOf('/documentation') !== -1) {
    return (
      <Sidebar style={{ padding: 12 }}>
        <h1>Documentation</h1>
        <p>These documentation links are automatically created with GatsbyJS and GraphQL.</p>
        <ul>
          {data.allMarkdownRemark.edges.map((edge, index) => (
            <li key={index}>
              <Link to={edge.node.frontmatter.path}>{edge.node.frontmatter.title}</Link>
            </li>
          ))}
        </ul>
      </Sidebar>
    );
  }

  if (location.pathname.indexOf('/components') !== -1) {
    return (
      <Sidebar style={{ padding: 12 }}>
        <h1>Components</h1>
        <p>These component links are automatically created with GatsbyJS and GraphQL.</p>
        <ul>
          {data.allDirectory.edges.map((edge, index) => (
            <li key={index}>
              <Link to={`/components/${edge.node.name}`}>@zendeskgarden/react-{edge.node.name}</Link>
            </li>
          ))}
        </ul>
      </Sidebar>
    )
  }

  return <div></div>;
};

const TemplateWrapper = ({ children, location, data }) => {
  return (
    <Chrome>
      <Helmet
        title="Zendesk Garden"
        meta={[
          { name: 'description', content: 'Zendesk Garden Design System.' },
          { name: 'keywords', content: 'zendesk, garden, design, system, documentation, react, css' },
        ]}
      />
      <Navigation location={location} />
      <Body>
        <Header></Header>
        <Content>
          {<DocumentationSidebar data={data} location={location} />}
          <Main style={{ width: '100%', padding: location.pathname.indexOf('/components/') !== -1 ? 0 : 32 }}>
            {children()}
          </Main>
        </Content>
      </Body>
    </Chrome>
  )};

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper;


export const query = graphql`
query DocumentationPosts {
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
