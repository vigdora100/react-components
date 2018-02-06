'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-pagination.js')

appendStyles({
  css: ".rc-pagination-e6610f6a:focus{outline:0}.rc-no_animation-e6610f6a{transition:none}.rc-is_hidden-e6610f6a[aria-hidden=true]{display:inherit}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"pagination":"rc-pagination-e6610f6a rc-c-pagination-9f24469","page":"rc-page-e6610f6a rc-c-pagination__page-9f24469","no_animation":"rc-no_animation-e6610f6a","page_previous":"rc-page_previous-e6610f6a rc-c-pagination__page--previous-9f24469","page_next":"rc-page_next-e6610f6a rc-c-pagination__page--next-9f24469","page_gap":"rc-page_gap-e6610f6a rc-c-pagination__page--gap-9f24469","is_current":"rc-is_current-e6610f6a rc-is-current-9f24469","is_focused":"rc-is_focused-e6610f6a rc-is-focused-9f24469","is_hovered":"rc-is_hovered-e6610f6a rc-is-hovered-9f24469","is_hidden":"rc-is_hidden-e6610f6a rc-is-hidden-9f24469","is_rtl":"rc-is_rtl-e6610f6a rc-is-rtl-9f24469"}
