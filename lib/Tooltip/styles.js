'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tooltips.js')
require('../deps/@zendesk/garden-css-arrows.js')

appendStyles({
  css: ".rc-container-f27cd128{position:fixed}.rc-size_medium-f27cd128{max-width:270px}.rc-inline-f27cd128{position:absolute}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"container":"rc-container-f27cd128","tooltip":"rc-tooltip-f27cd128 rc-c-tooltip-5fd1601c rc-c-arrow-5fd1601c rc-c-arrow-75227e88","size_medium":"rc-size_medium-f27cd128 rc-c-tooltip--medium-5fd1601c","size_large":"rc-size_large-f27cd128 rc-c-tooltip--large-5fd1601c","left":"rc-left-f27cd128 rc-c-arrow--r-75227e88","bottom":"rc-bottom-f27cd128 rc-c-arrow--t-75227e88","top":"rc-top-f27cd128 rc-c-arrow--b-75227e88","right":"rc-right-f27cd128 rc-c-arrow--l-75227e88","inline":"rc-inline-f27cd128"}
