/**
 * Package specific styleguide configuration
 * https://github.com/styleguidist/react-styleguidist/blob/master/docs/Configuration.md
 */

module.exports = {
  sections: [{
    name: 'Containers',
    content: "../../packages/tooltips/README.md",
    components: "../../packages/tooltips/src/[A-Z]*.js"
  }, {
    name: 'Tooltips',
    components: "../../packages/tooltips/src/tooltips/[A-Z]*.js",
    sections: [{
      name: 'Content',
      components: "../../packages/tooltips/src/tooltips/content/[A-Z]*.js"
    }]
  }]
};
