'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tooltips.js')
require('../deps/@zendesk/garden-css-arrows.js')

appendStyles({
  css: ".rc-container-4ab0d1ee{position:fixed}.rc-size_medium-4ab0d1ee{max-width:270px}.rc-inline-4ab0d1ee{position:absolute}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"container":"rc-container-4ab0d1ee","tooltip":"rc-tooltip-4ab0d1ee rc-c-tooltip-5fcf601c rc-c-arrow-5fcf601c rc-c-arrow-75207e88","size_medium":"rc-size_medium-4ab0d1ee rc-c-tooltip--medium-5fcf601c","size_large":"rc-size_large-4ab0d1ee rc-c-tooltip--large-5fcf601c","left":"rc-left-4ab0d1ee rc-c-arrow--r-75207e88","bottom":"rc-bottom-4ab0d1ee rc-c-arrow--t-75207e88","top":"rc-top-4ab0d1ee rc-c-arrow--b-75207e88","right":"rc-right-4ab0d1ee rc-c-arrow--l-75207e88","inline":"rc-inline-4ab0d1ee"}
