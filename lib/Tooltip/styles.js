'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tooltips.js')
require('../deps/@zendesk/garden-css-arrows.js')

appendStyles({
  css: ".rc-container-f13dd315{position:fixed}.rc-size_medium-f13dd315{max-width:270px}.rc-inline-f13dd315{position:absolute}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"container":"rc-container-f13dd315","tooltip":"rc-tooltip-f13dd315 rc-c-tooltip-84ad6021 rc-c-arrow-84ad6021 rc-c-arrow-fa6573bf","size_medium":"rc-size_medium-f13dd315 rc-c-tooltip--medium-84ad6021","size_large":"rc-size_large-f13dd315 rc-c-tooltip--large-84ad6021","left":"rc-left-f13dd315 rc-c-arrow--r-fa6573bf","bottom":"rc-bottom-f13dd315 rc-c-arrow--t-fa6573bf","top":"rc-top-f13dd315 rc-c-arrow--b-fa6573bf","right":"rc-right-f13dd315 rc-c-arrow--l-fa6573bf","inline":"rc-inline-f13dd315"}
