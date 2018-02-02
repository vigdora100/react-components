'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tooltips.js')
require('../deps/@zendesk/garden-css-arrows.js')

appendStyles({
  css: ".rc-container-91e9d067{position:fixed}.rc-size_medium-91e9d067{max-width:270px}.rc-inline-91e9d067{position:absolute}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"container":"rc-container-91e9d067","tooltip":"rc-tooltip-91e9d067 rc-c-tooltip-510f601a rc-c-arrow-510f601a rc-c-arrow-64587e86","size_medium":"rc-size_medium-91e9d067 rc-c-tooltip--medium-510f601a","size_large":"rc-size_large-91e9d067 rc-c-tooltip--large-510f601a","left":"rc-left-91e9d067 rc-c-arrow--r-64587e86","bottom":"rc-bottom-91e9d067 rc-c-arrow--t-64587e86","top":"rc-top-91e9d067 rc-c-arrow--b-64587e86","right":"rc-right-91e9d067 rc-c-arrow--l-64587e86","inline":"rc-inline-91e9d067"}
