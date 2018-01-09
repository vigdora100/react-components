/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { cssModulesConfig } = require('gatsby-1-config-css-modules');
const path = require("path");

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const blogPostTemplate = path.resolve(`src/templates/postTemplate.js`);
  const componentTemplate = path.resolve(`src/templates/componentTemplate.js`);

  return graphql(`
      {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
    			filter:{ fileAbsolutePath: { regex: "/styleguide/src/posts/"}}
          limit: 1000
        ) {
          edges {
            node {
              excerpt(pruneLength: 250)
              html
              id
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
    `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    // Create documentation markdown pages
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {}, // additional data can be passed via context
      });
    });

    // Create comonent iframe pages
    result.data.allDirectory.edges.forEach(({ node }) => {
      createPage({
        path: `/components/${node.name}`,
        component: componentTemplate,
        context: {
          componentName: node.name
        }
      });
    });
  });
};

exports.modifyWebpackConfig = ({ config, stage }) => {
  switch (stage) {
  case 'develop':
    config.loader(`customCssModule`, {
      test: /css$/,
      include: /node_modules\/@zendesk/,
      loaders: [`style`, cssModulesConfig(stage), `postcss`]
    });
    break;

  case 'build-css':
  case 'build-html':
  case `develop-html`:
  case 'build-javascript':
    config.loader(`customCssModule`, {
      test: /css$/,
      include: /node_modules\/@zendesk/,
      loader: ExtractTextPlugin.extract(`style`, [
        cssModulesConfig(stage),
        `postcss`
      ])
    });
    break;
  }

  config.loader(`css`, {
    exclude: /node_modules\/@zendesk/
  });

  return config
}
