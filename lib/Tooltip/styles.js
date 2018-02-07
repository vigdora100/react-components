'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tooltips.js')
require('../deps/@zendesk/garden-css-arrows.js')

appendStyles({
  css: ".rc-container-dbdcd064{position:fixed}.rc-size_medium-dbdcd064{max-width:270px}.rc-inline-dbdcd064{position:absolute}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"container":"rc-container-dbdcd064","tooltip":"rc-tooltip-dbdcd064 rc-c-tooltip-5111601a rc-c-arrow-5111601a rc-c-arrow-645a7e86","size_medium":"rc-size_medium-dbdcd064 rc-c-tooltip--medium-5111601a","size_large":"rc-size_large-dbdcd064 rc-c-tooltip--large-5111601a","left":"rc-left-dbdcd064 rc-c-arrow--r-645a7e86","bottom":"rc-bottom-dbdcd064 rc-c-arrow--t-645a7e86","top":"rc-top-dbdcd064 rc-c-arrow--b-645a7e86","right":"rc-right-dbdcd064 rc-c-arrow--l-645a7e86","inline":"rc-inline-dbdcd064"}
