/**
 * Package specific styleguide configuration
 * https://github.com/styleguidist/react-styleguidist/blob/master/docs/Configuration.md
 */

module.exports = {
  sections: [{
    name: "Notifications",
    content: "../../packages/notifications/README.md",
    components: '../../packages/notifications/src/[A-Z]*.js'
  }, {
    name: "Content",
    components: '../../packages/notifications/src/Content/[A-Z]*.js'
  }]
};
