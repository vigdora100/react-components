/**
 * Package specific styleguide configuration
 * https://github.com/styleguidist/react-styleguidist/blob/master/docs/Configuration.md
 */

module.exports = {
  sections: [{
    name: 'General',
    content: "../../packages/selection/README.md"
  }, {
    name: "Higher Order Components",
    components: "../../packages/selection/src/[A-Z]*.js"
  }, {
    name: "Constants",
    components: "../../packages/selection/src/constants/[A-Z]*.js"
  }]
};
