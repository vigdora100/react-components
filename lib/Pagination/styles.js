'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-pagination.js')

appendStyles({
  css: ".rc-pagination-3c00f7e:focus{outline:0}.rc-no_animation-3c00f7e{transition:none}.rc-is_hidden-3c00f7e[aria-hidden=true]{display:inherit}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"pagination":"rc-pagination-3c00f7e rc-c-pagination-9f44469","page":"rc-page-3c00f7e rc-c-pagination__page-9f44469","no_animation":"rc-no_animation-3c00f7e","page_previous":"rc-page_previous-3c00f7e rc-c-pagination__page--previous-9f44469","page_next":"rc-page_next-3c00f7e rc-c-pagination__page--next-9f44469","page_gap":"rc-page_gap-3c00f7e rc-c-pagination__page--gap-9f44469","is_current":"rc-is_current-3c00f7e rc-is-current-9f44469","is_focused":"rc-is_focused-3c00f7e rc-is-focused-9f44469","is_hovered":"rc-is_hovered-3c00f7e rc-is-hovered-9f44469","is_hidden":"rc-is_hidden-3c00f7e rc-is-hidden-9f44469","is_rtl":"rc-is_rtl-3c00f7e rc-is-rtl-9f44469"}
