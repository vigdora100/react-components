/**
 * Package specific styleguide configuration
 * https://github.com/styleguidist/react-styleguidist/blob/master/docs/Configuration.md
 */

module.exports = {
  sections: [{
    name: "General",
    content: "../../packages/button/README.md",
    components: '../../packages/button/src/[A-Z]*.js'
  }, {
    name: "ButtonGroup",
    components: '../../packages/button/src/ButtonGroup/*.js'
  }, {
    name: "IconButton",
    components: '../../packages/button/src/IconButton/*.js'
  }]
};
