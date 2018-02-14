'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tooltips.js')
require('../deps/@zendesk/garden-css-arrows.js')

appendStyles({
  css: ".rc-container-6896d0d3{position:fixed}.rc-size_medium-6896d0d3{max-width:270px}.rc-inline-6896d0d3{position:absolute}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"container":"rc-container-6896d0d3","tooltip":"rc-tooltip-6896d0d3 rc-c-tooltip-6731601d rc-c-arrow-6731601d rc-c-arrow-7d867e89","size_medium":"rc-size_medium-6896d0d3 rc-c-tooltip--medium-6731601d","size_large":"rc-size_large-6896d0d3 rc-c-tooltip--large-6731601d","left":"rc-left-6896d0d3 rc-c-arrow--r-7d867e89","bottom":"rc-bottom-6896d0d3 rc-c-arrow--t-7d867e89","top":"rc-top-6896d0d3 rc-c-arrow--b-7d867e89","right":"rc-right-6896d0d3 rc-c-arrow--l-7d867e89","inline":"rc-inline-6896d0d3"}
