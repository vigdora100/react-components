'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tooltips.js')
require('../deps/@zendesk/garden-css-arrows.js')

appendStyles({
  css: ".rc-container-f491d306{position:fixed}.rc-size_medium-f491d306{max-width:270px}.rc-inline-f491d306{position:absolute}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"container":"rc-container-f491d306","tooltip":"rc-tooltip-f491d306 rc-c-tooltip-6e91601e rc-c-arrow-6e91601e rc-c-arrow-e1a673bc","size_medium":"rc-size_medium-f491d306 rc-c-tooltip--medium-6e91601e","size_large":"rc-size_large-f491d306 rc-c-tooltip--large-6e91601e","left":"rc-left-f491d306 rc-c-arrow--r-e1a673bc","bottom":"rc-bottom-f491d306 rc-c-arrow--t-e1a673bc","top":"rc-top-f491d306 rc-c-arrow--b-e1a673bc","right":"rc-right-f491d306 rc-c-arrow--l-e1a673bc","inline":"rc-inline-f491d306"}
