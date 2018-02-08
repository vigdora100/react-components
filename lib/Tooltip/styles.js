'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tooltips.js')
require('../deps/@zendesk/garden-css-arrows.js')

appendStyles({
  css: ".rc-container-154ad2ea{position:fixed}.rc-size_medium-154ad2ea{max-width:270px}.rc-inline-154ad2ea{position:absolute}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"container":"rc-container-154ad2ea","tooltip":"rc-tooltip-154ad2ea rc-c-tooltip-5fcd601c rc-c-arrow-5fcd601c rc-c-arrow-751e7e88","size_medium":"rc-size_medium-154ad2ea rc-c-tooltip--medium-5fcd601c","size_large":"rc-size_large-154ad2ea rc-c-tooltip--large-5fcd601c","left":"rc-left-154ad2ea rc-c-arrow--r-751e7e88","bottom":"rc-bottom-154ad2ea rc-c-arrow--t-751e7e88","top":"rc-top-154ad2ea rc-c-arrow--b-751e7e88","right":"rc-right-154ad2ea rc-c-arrow--l-751e7e88","inline":"rc-inline-154ad2ea"}
