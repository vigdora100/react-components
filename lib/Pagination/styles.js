'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-pagination.js')

appendStyles({
  css: ".rc-pagination-51d41132:focus{outline:0}.rc-no_animation-51d41132{transition:none}.rc-is_hidden-51d41132[aria-hidden=true]{display:inherit}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"pagination":"rc-pagination-51d41132 rc-c-pagination-7b194465","page":"rc-page-51d41132 rc-c-pagination__page-7b194465","no_animation":"rc-no_animation-51d41132","page_previous":"rc-page_previous-51d41132 rc-c-pagination__page--previous-7b194465","page_next":"rc-page_next-51d41132 rc-c-pagination__page--next-7b194465","page_gap":"rc-page_gap-51d41132 rc-c-pagination__page--gap-7b194465","is_current":"rc-is_current-51d41132 rc-is-current-7b194465","is_focused":"rc-is_focused-51d41132 rc-is-focused-7b194465","is_hovered":"rc-is_hovered-51d41132 rc-is-hovered-7b194465","is_hidden":"rc-is_hidden-51d41132 rc-is-hidden-7b194465","is_rtl":"rc-is_rtl-51d41132 rc-is-rtl-7b194465"}
