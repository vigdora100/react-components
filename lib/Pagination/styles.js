'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-pagination.js')

appendStyles({
  css: ".rc-pagination-6be4113f:focus{outline:0}.rc-no_animation-6be4113f{transition:none}.rc-is_hidden-6be4113f[aria-hidden=true]{display:inherit}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"pagination":"rc-pagination-6be4113f rc-c-pagination-e6334468","page":"rc-page-6be4113f rc-c-pagination__page-e6334468","no_animation":"rc-no_animation-6be4113f","page_previous":"rc-page_previous-6be4113f rc-c-pagination__page--previous-e6334468","page_next":"rc-page_next-6be4113f rc-c-pagination__page--next-e6334468","page_gap":"rc-page_gap-6be4113f rc-c-pagination__page--gap-e6334468","is_current":"rc-is_current-6be4113f rc-is-current-e6334468","is_focused":"rc-is_focused-6be4113f rc-is-focused-e6334468","is_hovered":"rc-is_hovered-6be4113f rc-is-hovered-e6334468","is_hidden":"rc-is_hidden-6be4113f rc-is-hidden-e6334468","is_rtl":"rc-is_rtl-6be4113f rc-is-rtl-e6334468"}
