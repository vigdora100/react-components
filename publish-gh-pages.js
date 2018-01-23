#!/usr/bin/env node

const ghPages = require('gh-pages');

/**
 * This configuration will avoid logging the Github token if there is an error.
 */
ghPages.publish('styleguide', {
  repo: `https://${process.env.GITHUB_TOKEN}@github.com:zendeskgarden/react-components.git`,
  silent: true,
  add: true
}, (error) => {
  if (error) {
    console.log(error);
  }

  console.log('GH-Pages upload complete.')
});
