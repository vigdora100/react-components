'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-pagination.js')

appendStyles({
  css: ".rc-pagination-c31e115e:focus{outline:0}.rc-no_animation-c31e115e{transition:none}.rc-is_hidden-c31e115e[aria-hidden=true]{display:inherit}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"pagination":"rc-pagination-c31e115e rc-c-pagination-9ee4469","page":"rc-page-c31e115e rc-c-pagination__page-9ee4469","no_animation":"rc-no_animation-c31e115e","page_previous":"rc-page_previous-c31e115e rc-c-pagination__page--previous-9ee4469","page_next":"rc-page_next-c31e115e rc-c-pagination__page--next-9ee4469","page_gap":"rc-page_gap-c31e115e rc-c-pagination__page--gap-9ee4469","is_current":"rc-is_current-c31e115e rc-is-current-9ee4469","is_focused":"rc-is_focused-c31e115e rc-is-focused-9ee4469","is_hovered":"rc-is_hovered-c31e115e rc-is-hovered-9ee4469","is_hidden":"rc-is_hidden-c31e115e rc-is-hidden-9ee4469","is_rtl":"rc-is_rtl-c31e115e rc-is-rtl-9ee4469"}
