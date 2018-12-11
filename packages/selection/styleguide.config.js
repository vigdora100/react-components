/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

/**
 * Package specific styleguide configuration
 * https://github.com/styleguidist/react-styleguidist/blob/master/docs/Configuration.md
 */
module.exports = {
  sections: [
    {
      name: '',
      content: '../../packages/selection/README.md'
    },
    {
      name: 'Hooks',
      components: '../../packages/selection/src/hooks/*.js'
    },
    {
      name: 'Containers',
      components: '../../packages/selection/src/containers/[A-Z]*.js'
    },
    {
      name: 'Utils',
      components: '../../packages/selection/src/utils/*.js'
    },
    {
      name: 'Constants',
      components: '../../packages/selection/src/constants/*.js'
    }
  ]
};
