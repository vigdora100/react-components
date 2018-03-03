'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tooltips.js')
require('../deps/@zendesk/garden-css-arrows.js')

appendStyles({
  css: ".rc-container-182bd20f{position:fixed}.rc-size_medium-182bd20f{max-width:270px}.rc-inline-182bd20f{position:absolute}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"container":"rc-container-182bd20f","tooltip":"rc-tooltip-182bd20f rc-c-tooltip-7d4d6020 rc-c-arrow-7d4d6020 rc-c-arrow-f22473be","size_medium":"rc-size_medium-182bd20f rc-c-tooltip--medium-7d4d6020","size_large":"rc-size_large-182bd20f rc-c-tooltip--large-7d4d6020","left":"rc-left-182bd20f rc-c-arrow--r-f22473be","bottom":"rc-bottom-182bd20f rc-c-arrow--t-f22473be","top":"rc-top-182bd20f rc-c-arrow--b-f22473be","right":"rc-right-182bd20f rc-c-arrow--l-f22473be","inline":"rc-inline-182bd20f"}
