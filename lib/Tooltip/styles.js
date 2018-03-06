'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tooltips.js')
require('../deps/@zendesk/garden-css-arrows.js')

appendStyles({
  css: ".rc-container-2a14d349{position:fixed}.rc-size_medium-2a14d349{max-width:270px}.rc-inline-2a14d349{position:absolute}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"container":"rc-container-2a14d349","tooltip":"rc-tooltip-2a14d349 rc-c-tooltip-75f1601f rc-c-arrow-75f1601f rc-c-arrow-e9e773bd","size_medium":"rc-size_medium-2a14d349 rc-c-tooltip--medium-75f1601f","size_large":"rc-size_large-2a14d349 rc-c-tooltip--large-75f1601f","left":"rc-left-2a14d349 rc-c-arrow--r-e9e773bd","bottom":"rc-bottom-2a14d349 rc-c-arrow--t-e9e773bd","top":"rc-top-2a14d349 rc-c-arrow--b-e9e773bd","right":"rc-right-2a14d349 rc-c-arrow--l-e9e773bd","inline":"rc-inline-2a14d349"}
