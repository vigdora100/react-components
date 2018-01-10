import React from 'react'
import PropTypes from 'prop-types'
import { navigateTo, withPrefix } from 'gatsby-link'
import Helmet from 'react-helmet';
import styled from 'styled-components';

import { zdColorAlgae } from '@zendesk/garden-css-variables';
import { PageWrapper, Page, Link } from '../components';
import { Chrome, Body, Header, HeaderItem, HeaderItemIcon } from 'garden-react-chrome';
import ZendeskIcon from '@zendesk/garden-svg-icons/src/26-zendesk.svg';

import './index.css'

const TemplateWrapper = ({ children, location }) => {
  return (
    <Chrome>
      <Helmet
        title="Zendesk Garden"
        meta={[
          { name: 'description', content: 'Zendesk Garden Design System' },
          { name: 'keywords', content: 'zendesk, garden, design, system, documentation, react, css' },
        ]}
      />
      <Body>
        <Header standalone>
          <HeaderItem logo>
            <HeaderItemIcon>
              <Link to='/' style={{ color: zdColorAlgae }}>
                <ZendeskIcon />
              </Link>
            </HeaderItemIcon>
          </HeaderItem>
        </Header>
        <PageWrapper>
          <Page location={location}>
            {children()}
          </Page>
        </PageWrapper>
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
