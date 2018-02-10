'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tooltips.js')
require('../deps/@zendesk/garden-css-arrows.js')

appendStyles({
  css: ".rc-container-c0bbd199{position:fixed}.rc-size_medium-c0bbd199{max-width:270px}.rc-inline-c0bbd199{position:absolute}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"container":"rc-container-c0bbd199","tooltip":"rc-tooltip-c0bbd199 rc-c-tooltip-672f601d rc-c-arrow-672f601d rc-c-arrow-7d847e89","size_medium":"rc-size_medium-c0bbd199 rc-c-tooltip--medium-672f601d","size_large":"rc-size_large-c0bbd199 rc-c-tooltip--large-672f601d","left":"rc-left-c0bbd199 rc-c-arrow--r-7d847e89","bottom":"rc-bottom-c0bbd199 rc-c-arrow--t-7d847e89","top":"rc-top-c0bbd199 rc-c-arrow--b-7d847e89","right":"rc-right-c0bbd199 rc-c-arrow--l-7d847e89","inline":"rc-inline-c0bbd199"}
