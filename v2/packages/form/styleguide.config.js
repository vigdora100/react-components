/**
 * Package specific styleguide configuration
 * https://github.com/styleguidist/react-styleguidist/blob/master/docs/Configuration.md
 */

module.exports = {
    sections: [{
        name: "General",
        content: "../../packages/form/README.md",
        components: "../../packages/form/src/[A-Z]*.js"
    }, {
        name: "Messages",
        components: "../../packages/form/src/Message/*.js"
    }]
};
