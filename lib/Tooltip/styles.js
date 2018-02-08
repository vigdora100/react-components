'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tooltips.js')
require('../deps/@zendesk/garden-css-arrows.js')

appendStyles({
  css: ".rc-container-d372d282{position:fixed}.rc-size_medium-d372d282{max-width:270px}.rc-inline-d372d282{position:absolute}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"container":"rc-container-d372d282","tooltip":"rc-tooltip-d372d282 rc-c-tooltip-5871601b rc-c-arrow-5871601b rc-c-arrow-6cbe7e87","size_medium":"rc-size_medium-d372d282 rc-c-tooltip--medium-5871601b","size_large":"rc-size_large-d372d282 rc-c-tooltip--large-5871601b","left":"rc-left-d372d282 rc-c-arrow--r-6cbe7e87","bottom":"rc-bottom-d372d282 rc-c-arrow--t-6cbe7e87","top":"rc-top-d372d282 rc-c-arrow--b-6cbe7e87","right":"rc-right-d372d282 rc-c-arrow--l-6cbe7e87","inline":"rc-inline-d372d282"}
