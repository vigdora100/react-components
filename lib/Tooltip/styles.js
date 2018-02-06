'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tooltips.js')
require('../deps/@zendesk/garden-css-arrows.js')

appendStyles({
  css: ".rc-container-ff5bd2d8{position:fixed}.rc-size_medium-ff5bd2d8{max-width:270px}.rc-inline-ff5bd2d8{position:absolute}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"container":"rc-container-ff5bd2d8","tooltip":"rc-tooltip-ff5bd2d8 rc-c-tooltip-5fcb601c rc-c-arrow-5fcb601c rc-c-arrow-751c7e88","size_medium":"rc-size_medium-ff5bd2d8 rc-c-tooltip--medium-5fcb601c","size_large":"rc-size_large-ff5bd2d8 rc-c-tooltip--large-5fcb601c","left":"rc-left-ff5bd2d8 rc-c-arrow--r-751c7e88","bottom":"rc-bottom-ff5bd2d8 rc-c-arrow--t-751c7e88","top":"rc-top-ff5bd2d8 rc-c-arrow--b-751c7e88","right":"rc-right-ff5bd2d8 rc-c-arrow--l-751c7e88","inline":"rc-inline-ff5bd2d8"}
