/**
 * Package specific styleguide configuration
 * https://github.com/styleguidist/react-styleguidist/blob/master/docs/Configuration.md
 */

module.exports = {
  sections: [{
    name: 'Forms',
    content: "../../packages/forms/README.md",
    components: "../../packages/forms/src/form/[A-Z]*.js"
  }, {
    name: 'Text',
    components: "../../packages/forms/src/text/[A-Z]*.js"
  }, {
    name: 'Checkbox',
    content: "../../packages/forms/src/checkbox/checkbox.example.md"
  }, {
    name: 'Toggle',
    content: "../../packages/forms/src/toggle/toggle.example.md"
  }, {
    name: 'Radio',
    content: "../../packages/forms/src/radio/radio.example.md"
  }]
};
