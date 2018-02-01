'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tooltips.js')
require('../deps/@zendesk/garden-css-arrows.js')

appendStyles({
  css: ".rc-container-1bedd19d{position:fixed}.rc-size_medium-1bedd19d{max-width:270px}.rc-inline-1bedd19d{position:absolute}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"container":"rc-container-1bedd19d","tooltip":"rc-tooltip-1bedd19d rc-c-tooltip-49b16019 rc-c-arrow-49b16019 rc-c-arrow-5bf67e85","size_medium":"rc-size_medium-1bedd19d rc-c-tooltip--medium-49b16019","size_large":"rc-size_large-1bedd19d rc-c-tooltip--large-49b16019","left":"rc-left-1bedd19d rc-c-arrow--r-5bf67e85","bottom":"rc-bottom-1bedd19d rc-c-arrow--t-5bf67e85","top":"rc-top-1bedd19d rc-c-arrow--b-5bf67e85","right":"rc-right-1bedd19d rc-c-arrow--l-5bf67e85","inline":"rc-inline-1bedd19d"}
