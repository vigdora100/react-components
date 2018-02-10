'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-pagination.js')

appendStyles({
  css: ".rc-pagination-d5c31641:focus{outline:0}.rc-no_animation-d5c31641{transition:none}.rc-is_hidden-d5c31641[aria-hidden=true]{display:inherit}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"pagination":"rc-pagination-d5c31641 rc-c-pagination-2daa446a","page":"rc-page-d5c31641 rc-c-pagination__page-2daa446a","no_animation":"rc-no_animation-d5c31641","page_previous":"rc-page_previous-d5c31641 rc-c-pagination__page--previous-2daa446a","page_next":"rc-page_next-d5c31641 rc-c-pagination__page--next-2daa446a","page_gap":"rc-page_gap-d5c31641 rc-c-pagination__page--gap-2daa446a","is_current":"rc-is_current-d5c31641 rc-is-current-2daa446a","is_focused":"rc-is_focused-d5c31641 rc-is-focused-2daa446a","is_hovered":"rc-is_hovered-d5c31641 rc-is-hovered-2daa446a","is_hidden":"rc-is_hidden-d5c31641 rc-is-hidden-2daa446a","is_rtl":"rc-is_rtl-d5c31641 rc-is-rtl-2daa446a"}
