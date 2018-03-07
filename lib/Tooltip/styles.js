'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tooltips.js')
require('../deps/@zendesk/garden-css-arrows.js')

appendStyles({
  css: ".rc-container-2e0bd221{position:fixed}.rc-size_medium-2e0bd221{max-width:270px}.rc-inline-2e0bd221{position:absolute}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"container":"rc-container-2e0bd221","tooltip":"rc-tooltip-2e0bd221 rc-c-tooltip-7d4f6020 rc-c-arrow-7d4f6020 rc-c-arrow-f22673be","size_medium":"rc-size_medium-2e0bd221 rc-c-tooltip--medium-7d4f6020","size_large":"rc-size_large-2e0bd221 rc-c-tooltip--large-7d4f6020","left":"rc-left-2e0bd221 rc-c-arrow--r-f22673be","bottom":"rc-bottom-2e0bd221 rc-c-arrow--t-f22673be","top":"rc-top-2e0bd221 rc-c-arrow--b-f22673be","right":"rc-right-2e0bd221 rc-c-arrow--l-f22673be","inline":"rc-inline-2e0bd221"}
