/**
 * Package specific styleguide configuration
 * https://github.com/styleguidist/react-styleguidist/blob/master/docs/Configuration.md
 */

module.exports = {
  sections: [{
    name: 'Containers',
    content: "../../packages/menus/README.md",
    components: "../../packages/menus/src/[A-Z]*.js"
  }, {
    name: 'Menu',
    components: "../../packages/menus/src/Menu/[A-Z]*.js",
    sections: [{
      name: "Items",
      components: "../../packages/menus/src/Menu/Items/[A-Z]*.js"
    }, {
      name: "Header",
      components: "../../packages/menus/src/Menu/Items/Header/[A-Z]*.js"
    }, {
      name: "Media",
      components: "../../packages/menus/src/Menu/Items/Media/[A-Z]*.js"
    }]
  }]
};
