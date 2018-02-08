'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tooltips.js')
require('../deps/@zendesk/garden-css-arrows.js')

appendStyles({
  css: ".rc-container-2ba6d348{position:fixed}.rc-size_medium-2ba6d348{max-width:270px}.rc-inline-2ba6d348{position:absolute}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"container":"rc-container-2ba6d348","tooltip":"rc-tooltip-2ba6d348 rc-c-tooltip-586f601b rc-c-arrow-586f601b rc-c-arrow-6cbc7e87","size_medium":"rc-size_medium-2ba6d348 rc-c-tooltip--medium-586f601b","size_large":"rc-size_large-2ba6d348 rc-c-tooltip--large-586f601b","left":"rc-left-2ba6d348 rc-c-arrow--r-6cbc7e87","bottom":"rc-bottom-2ba6d348 rc-c-arrow--t-6cbc7e87","top":"rc-top-2ba6d348 rc-c-arrow--b-6cbc7e87","right":"rc-right-2ba6d348 rc-c-arrow--l-6cbc7e87","inline":"rc-inline-2ba6d348"}
