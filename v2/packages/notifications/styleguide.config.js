/**
 * Package specific styleguide configuration
 * https://github.com/styleguidist/react-styleguidist/blob/master/docs/Configuration.md
 */

module.exports = {
  sections: [{
    name: "Notifications",
    content: "../../packages/notifications/README.md",
    components: () => [
      '../../packages/notifications/src/Notification.js',
      '../../packages/notifications/src/DialogNotification.js'
    ]
  }, {
    name: "Content Components",
    components: () => [
      '../../packages/notifications/src/Close.js',
      '../../packages/notifications/src/Title.js',
      '../../packages/notifications/src/Paragraph.js'
    ]
  }]
};
