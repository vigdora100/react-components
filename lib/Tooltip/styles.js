'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tooltips.js')
require('../deps/@zendesk/garden-css-arrows.js')

appendStyles({
  css: ".rc-container-86e3cfea{position:fixed}.rc-size_medium-86e3cfea{max-width:270px}.rc-inline-86e3cfea{position:absolute}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"container":"rc-container-86e3cfea","tooltip":"rc-tooltip-86e3cfea rc-c-tooltip-8c0b6022 rc-c-arrow-8c0b6022 rc-c-arrow-2b373c0","size_medium":"rc-size_medium-86e3cfea rc-c-tooltip--medium-8c0b6022","size_large":"rc-size_large-86e3cfea rc-c-tooltip--large-8c0b6022","left":"rc-left-86e3cfea rc-c-arrow--r-2b373c0","bottom":"rc-bottom-86e3cfea rc-c-arrow--t-2b373c0","top":"rc-top-86e3cfea rc-c-arrow--b-2b373c0","right":"rc-right-86e3cfea rc-c-arrow--l-2b373c0","inline":"rc-inline-86e3cfea"}
