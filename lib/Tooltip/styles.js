'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tooltips.js')
require('../deps/@zendesk/garden-css-arrows.js')

appendStyles({
  css: ".rc-container-2923d155{position:fixed}.rc-size_medium-2923d155{max-width:270px}.rc-inline-2923d155{position:absolute}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"container":"rc-container-2923d155","tooltip":"rc-tooltip-2923d155 rc-c-tooltip-5fc7601c rc-c-arrow-5fc7601c rc-c-arrow-75187e88","size_medium":"rc-size_medium-2923d155 rc-c-tooltip--medium-5fc7601c","size_large":"rc-size_large-2923d155 rc-c-tooltip--large-5fc7601c","left":"rc-left-2923d155 rc-c-arrow--r-75187e88","bottom":"rc-bottom-2923d155 rc-c-arrow--t-75187e88","top":"rc-top-2923d155 rc-c-arrow--b-75187e88","right":"rc-right-2923d155 rc-c-arrow--l-75187e88","inline":"rc-inline-2923d155"}
