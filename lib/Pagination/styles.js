'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-pagination.js')

appendStyles({
  css: ".rc-pagination-a1c1136a:focus{outline:0}.rc-no_animation-a1c1136a{transition:none}.rc-is_hidden-a1c1136a[aria-hidden=true]{display:inherit}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"pagination":"rc-pagination-a1c1136a rc-c-pagination-98c8446d","page":"rc-page-a1c1136a rc-c-pagination__page-98c8446d","no_animation":"rc-no_animation-a1c1136a","page_previous":"rc-page_previous-a1c1136a rc-c-pagination__page--previous-98c8446d","page_next":"rc-page_next-a1c1136a rc-c-pagination__page--next-98c8446d","page_gap":"rc-page_gap-a1c1136a rc-c-pagination__page--gap-98c8446d","is_current":"rc-is_current-a1c1136a rc-is-current-98c8446d","is_focused":"rc-is_focused-a1c1136a rc-is-focused-98c8446d","is_hovered":"rc-is_hovered-a1c1136a rc-is-hovered-98c8446d","is_hidden":"rc-is_hidden-a1c1136a rc-is-hidden-98c8446d","is_rtl":"rc-is_rtl-a1c1136a rc-is-rtl-98c8446d"}
