'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-pagination.js')

appendStyles({
  css: ".rc-pagination-13a81511:focus{outline:0}.rc-no_animation-13a81511{transition:none}.rc-is_hidden-13a81511[aria-hidden=true]{display:inherit}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"pagination":"rc-pagination-13a81511 rc-c-pagination-9ecd4466","page":"rc-page-13a81511 rc-c-pagination__page-9ecd4466","no_animation":"rc-no_animation-13a81511","page_previous":"rc-page_previous-13a81511 rc-c-pagination__page--previous-9ecd4466","page_next":"rc-page_next-13a81511 rc-c-pagination__page--next-9ecd4466","page_gap":"rc-page_gap-13a81511 rc-c-pagination__page--gap-9ecd4466","is_current":"rc-is_current-13a81511 rc-is-current-9ecd4466","is_focused":"rc-is_focused-13a81511 rc-is-focused-9ecd4466","is_hovered":"rc-is_hovered-13a81511 rc-is-hovered-9ecd4466","is_hidden":"rc-is_hidden-13a81511 rc-is-hidden-9ecd4466","is_rtl":"rc-is_rtl-13a81511 rc-is-rtl-9ecd4466"}
