'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tooltips.js')
require('../deps/@zendesk/garden-css-arrows.js')

appendStyles({
  css: ".rc-container-8239d40f{position:fixed}.rc-size_medium-8239d40f{max-width:270px}.rc-inline-8239d40f{position:absolute}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"container":"rc-container-8239d40f","tooltip":"rc-tooltip-8239d40f rc-c-tooltip-75ef601f rc-c-arrow-75ef601f rc-c-arrow-e9e573bd","size_medium":"rc-size_medium-8239d40f rc-c-tooltip--medium-75ef601f","size_large":"rc-size_large-8239d40f rc-c-tooltip--large-75ef601f","left":"rc-left-8239d40f rc-c-arrow--r-e9e573bd","bottom":"rc-bottom-8239d40f rc-c-arrow--t-e9e573bd","top":"rc-top-8239d40f rc-c-arrow--b-e9e573bd","right":"rc-right-8239d40f rc-c-arrow--l-e9e573bd","inline":"rc-inline-8239d40f"}
