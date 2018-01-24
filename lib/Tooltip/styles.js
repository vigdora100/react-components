'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tooltips.js')
require('../deps/@zendesk/garden-css-arrows.js')

appendStyles({
  css: ".rc-container-1b5bcee3{position:fixed}.rc-size_medium-1b5bcee3{max-width:270px}.rc-inline-1b5bcee3{position:absolute}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"container":"rc-container-1b5bcee3","tooltip":"rc-tooltip-1b5bcee3 rc-c-tooltip-42516018 rc-c-arrow-42516018 rc-c-arrow-53927e84","size_medium":"rc-size_medium-1b5bcee3 rc-c-tooltip--medium-42516018","size_large":"rc-size_large-1b5bcee3 rc-c-tooltip--large-42516018","left":"rc-left-1b5bcee3 rc-c-arrow--r-53927e84","bottom":"rc-bottom-1b5bcee3 rc-c-arrow--t-53927e84","top":"rc-top-1b5bcee3 rc-c-arrow--b-53927e84","right":"rc-right-1b5bcee3 rc-c-arrow--l-53927e84","inline":"rc-inline-1b5bcee3"}
