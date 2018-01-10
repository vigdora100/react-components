/**
 * Package specific styleguide configuration
 * https://github.com/styleguidist/react-styleguidist/blob/master/docs/Configuration.md
 */

module.exports = {
  sections: [{
    name: "Button",
    content: "../../packages/button/README.md",
    components: '../../packages/button/src/[A-Z]*.js'
  }, {
    name: "Types",
    components: '../../packages/button/src/Types/[A-Z]*.js'
  }, {
    name: "ButtonGroup",
    components: '../../packages/button/src/ButtonGroup/[A-Z]*.js'
  }, {
    name: "IconButton",
    components: '../../packages/button/src/IconButton/[A-Z]*.js'
  }, {
    name: "Link",
    components: "../../packages/button/src/Link/[A-Z]*.js"
  }]
};
