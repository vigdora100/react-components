/**
 * Package specific styleguide configuration
 * https://github.com/styleguidist/react-styleguidist/blob/master/docs/Configuration.md
 */

module.exports = {
  sections: [{
    name: 'Container',
    content: "../../packages/menus/README.md",
    components: "../../packages/menus/src/[A-Z]*.js"
  }, {
    name: 'Menu',
    components: "../../packages/menus/src/Menu/[A-Z]*.js"
  }]
};
