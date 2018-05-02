'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tooltips.js')
require('../deps/@zendesk/garden-css-arrows.js')

appendStyles({
  css: ".rc-container-d5d7d15b{position:fixed}.rc-size_medium-d5d7d15b{max-width:270px}.rc-inline-d5d7d15b{position:absolute}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"container":"rc-container-d5d7d15b","tooltip":"rc-tooltip-d5d7d15b rc-c-tooltip-7d516020 rc-c-arrow-7d516020 rc-c-arrow-f22873be","size_medium":"rc-size_medium-d5d7d15b rc-c-tooltip--medium-7d516020","size_large":"rc-size_large-d5d7d15b rc-c-tooltip--large-7d516020","left":"rc-left-d5d7d15b rc-c-arrow--r-f22873be","bottom":"rc-bottom-d5d7d15b rc-c-arrow--t-f22873be","top":"rc-top-d5d7d15b rc-c-arrow--b-f22873be","right":"rc-right-d5d7d15b rc-c-arrow--l-f22873be","inline":"rc-inline-d5d7d15b"}
