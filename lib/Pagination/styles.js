'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-pagination.js')

appendStyles({
  css: ".rc-pagination-4bc10fd:focus{outline:0}.rc-no_animation-4bc10fd{transition:none}.rc-is_hidden-4bc10fd[aria-hidden=true]{display:inherit}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"pagination":"rc-pagination-4bc10fd rc-c-pagination-7512446c","page":"rc-page-4bc10fd rc-c-pagination__page-7512446c","no_animation":"rc-no_animation-4bc10fd","page_previous":"rc-page_previous-4bc10fd rc-c-pagination__page--previous-7512446c","page_next":"rc-page_next-4bc10fd rc-c-pagination__page--next-7512446c","page_gap":"rc-page_gap-4bc10fd rc-c-pagination__page--gap-7512446c","is_current":"rc-is_current-4bc10fd rc-is-current-7512446c","is_focused":"rc-is_focused-4bc10fd rc-is-focused-7512446c","is_hovered":"rc-is_hovered-4bc10fd rc-is-hovered-7512446c","is_hidden":"rc-is_hidden-4bc10fd rc-is-hidden-7512446c","is_rtl":"rc-is_rtl-4bc10fd rc-is-rtl-7512446c"}
