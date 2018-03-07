'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-pagination.js')

appendStyles({
  css: ".rc-pagination-84171356:focus{outline:0}.rc-no_animation-84171356{transition:none}.rc-is_hidden-84171356[aria-hidden=true]{display:inherit}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"pagination":"rc-pagination-84171356 rc-c-pagination-98c6446d","page":"rc-page-84171356 rc-c-pagination__page-98c6446d","no_animation":"rc-no_animation-84171356","page_previous":"rc-page_previous-84171356 rc-c-pagination__page--previous-98c6446d","page_next":"rc-page_next-84171356 rc-c-pagination__page--next-98c6446d","page_gap":"rc-page_gap-84171356 rc-c-pagination__page--gap-98c6446d","is_current":"rc-is_current-84171356 rc-is-current-98c6446d","is_focused":"rc-is_focused-84171356 rc-is-focused-98c6446d","is_hovered":"rc-is_hovered-84171356 rc-is-hovered-98c6446d","is_hidden":"rc-is_hidden-84171356 rc-is-hidden-98c6446d","is_rtl":"rc-is_rtl-84171356 rc-is-rtl-98c6446d"}
