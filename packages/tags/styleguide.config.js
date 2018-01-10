/**
 * Package specific styleguide configuration
 * https://github.com/styleguidist/react-styleguidist/blob/master/docs/Configuration.md
 */

module.exports = {
  sections: [{
    name: "Tag",
    content: "../../packages/tags/README.md",
    components: '../../packages/tags/src/[A-Z]*.js'
  }, {
    name: "Badge",
    components: "../../packages/tags/src/badge/[A-Z]*.js"
  }, {
    name: "Content",
    components: "../../packages/tags/src/content/[A-Z]*.js"
  }, {
    name: "Selectables",
    components: "../../packages/tags/src/selectables/[A-Z]*.js"
  }]
};
