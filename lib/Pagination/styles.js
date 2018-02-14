'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-pagination.js')

appendStyles({
  css: ".rc-pagination-c5f310d4:focus{outline:0}.rc-no_animation-c5f310d4{transition:none}.rc-is_hidden-c5f310d4[aria-hidden=true]{display:inherit}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"pagination":"rc-pagination-c5f310d4 rc-c-pagination-5160446b","page":"rc-page-c5f310d4 rc-c-pagination__page-5160446b","no_animation":"rc-no_animation-c5f310d4","page_previous":"rc-page_previous-c5f310d4 rc-c-pagination__page--previous-5160446b","page_next":"rc-page_next-c5f310d4 rc-c-pagination__page--next-5160446b","page_gap":"rc-page_gap-c5f310d4 rc-c-pagination__page--gap-5160446b","is_current":"rc-is_current-c5f310d4 rc-is-current-5160446b","is_focused":"rc-is_focused-c5f310d4 rc-is-focused-5160446b","is_hovered":"rc-is_hovered-c5f310d4 rc-is-hovered-5160446b","is_hidden":"rc-is_hidden-c5f310d4 rc-is-hidden-5160446b","is_rtl":"rc-is_rtl-c5f310d4 rc-is-rtl-5160446b"}
