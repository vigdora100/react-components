'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-pagination.js')

appendStyles({
  css: ".rc-pagination-2d2a1116:focus{outline:0}.rc-no_animation-2d2a1116{transition:none}.rc-is_hidden-2d2a1116[aria-hidden=true]{display:inherit}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"pagination":"rc-pagination-2d2a1116 rc-c-pagination-c2814467","page":"rc-page-2d2a1116 rc-c-pagination__page-c2814467","no_animation":"rc-no_animation-2d2a1116","page_previous":"rc-page_previous-2d2a1116 rc-c-pagination__page--previous-c2814467","page_next":"rc-page_next-2d2a1116 rc-c-pagination__page--next-c2814467","page_gap":"rc-page_gap-2d2a1116 rc-c-pagination__page--gap-c2814467","is_current":"rc-is_current-2d2a1116 rc-is-current-c2814467","is_focused":"rc-is_focused-2d2a1116 rc-is-focused-c2814467","is_hovered":"rc-is_hovered-2d2a1116 rc-is-hovered-c2814467","is_hidden":"rc-is_hidden-2d2a1116 rc-is-hidden-c2814467","is_rtl":"rc-is_rtl-2d2a1116 rc-is-rtl-c2814467"}
