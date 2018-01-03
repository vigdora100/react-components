/**
 * Package specific styleguide configuration
 * https://github.com/styleguidist/react-styleguidist/blob/master/docs/Configuration.md
 */

module.exports = {
    sections: [{
        name: "General",
        content: "../../packages/menu/README.md",
        components: "../../packages/menu/src/[A-Z]*.js"
    }, {
        name: "Menu Items",
        components: "../../packages/menu/src/Item/*.js"
    }]
};
