'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-pagination.js')

appendStyles({
  css: ".rc-pagination-666d1342:focus{outline:0}.rc-no_animation-666d1342{transition:none}.rc-is_hidden-666d1342[aria-hidden=true]{display:inherit}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"pagination":"rc-pagination-666d1342 rc-c-pagination-98c4446d","page":"rc-page-666d1342 rc-c-pagination__page-98c4446d","no_animation":"rc-no_animation-666d1342","page_previous":"rc-page_previous-666d1342 rc-c-pagination__page--previous-98c4446d","page_next":"rc-page_next-666d1342 rc-c-pagination__page--next-98c4446d","page_gap":"rc-page_gap-666d1342 rc-c-pagination__page--gap-98c4446d","is_current":"rc-is_current-666d1342 rc-is-current-98c4446d","is_focused":"rc-is_focused-666d1342 rc-is-focused-98c4446d","is_hovered":"rc-is_hovered-666d1342 rc-is-hovered-98c4446d","is_hidden":"rc-is_hidden-666d1342 rc-is-hidden-98c4446d","is_rtl":"rc-is_rtl-666d1342 rc-is-rtl-98c4446d"}
