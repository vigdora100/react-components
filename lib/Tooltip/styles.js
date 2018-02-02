'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tooltips.js')
require('../deps/@zendesk/garden-css-arrows.js')

appendStyles({
  css: ".rc-container-15c6d336{position:fixed}.rc-size_medium-15c6d336{max-width:270px}.rc-inline-15c6d336{position:absolute}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"container":"rc-container-15c6d336","tooltip":"rc-tooltip-15c6d336 rc-c-tooltip-586d601b rc-c-arrow-586d601b rc-c-arrow-6cba7e87","size_medium":"rc-size_medium-15c6d336 rc-c-tooltip--medium-586d601b","size_large":"rc-size_large-15c6d336 rc-c-tooltip--large-586d601b","left":"rc-left-15c6d336 rc-c-arrow--r-6cba7e87","bottom":"rc-bottom-15c6d336 rc-c-arrow--t-6cba7e87","top":"rc-top-15c6d336 rc-c-arrow--b-6cba7e87","right":"rc-right-15c6d336 rc-c-arrow--l-6cba7e87","inline":"rc-inline-15c6d336"}
