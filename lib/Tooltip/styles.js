'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tooltips.js')
require('../deps/@zendesk/garden-css-arrows.js')

appendStyles({
  css: ".rc-container-72cd327{position:fixed}.rc-size_medium-72cd327{max-width:270px}.rc-inline-72cd327{position:absolute}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"container":"rc-container-72cd327","tooltip":"rc-tooltip-72cd327 rc-c-tooltip-84af6021 rc-c-arrow-84af6021 rc-c-arrow-fa6773bf","size_medium":"rc-size_medium-72cd327 rc-c-tooltip--medium-84af6021","size_large":"rc-size_large-72cd327 rc-c-tooltip--large-84af6021","left":"rc-left-72cd327 rc-c-arrow--r-fa6773bf","bottom":"rc-bottom-72cd327 rc-c-arrow--t-fa6773bf","top":"rc-top-72cd327 rc-c-arrow--b-fa6773bf","right":"rc-right-72cd327 rc-c-arrow--l-fa6773bf","inline":"rc-inline-72cd327"}
