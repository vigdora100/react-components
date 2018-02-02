'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-pagination.js')

appendStyles({
  css: ".rc-pagination-305b131e:focus{outline:0}.rc-no_animation-305b131e{transition:none}.rc-is_hidden-305b131e[aria-hidden=true]{display:inherit}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"pagination":"rc-pagination-305b131e rc-c-pagination-c27f4467","page":"rc-page-305b131e rc-c-pagination__page-c27f4467","no_animation":"rc-no_animation-305b131e","page_previous":"rc-page_previous-305b131e rc-c-pagination__page--previous-c27f4467","page_next":"rc-page_next-305b131e rc-c-pagination__page--next-c27f4467","page_gap":"rc-page_gap-305b131e rc-c-pagination__page--gap-c27f4467","is_current":"rc-is_current-305b131e rc-is-current-c27f4467","is_focused":"rc-is_focused-305b131e rc-is-focused-c27f4467","is_hovered":"rc-is_hovered-305b131e rc-is-hovered-c27f4467","is_hidden":"rc-is_hidden-305b131e rc-is-hidden-c27f4467","is_rtl":"rc-is_rtl-305b131e rc-is-rtl-c27f4467"}
