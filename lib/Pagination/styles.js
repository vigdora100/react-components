'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-pagination.js')

appendStyles({
  css: ".rc-pagination-4e3a112b:focus{outline:0}.rc-no_animation-4e3a112b{transition:none}.rc-is_hidden-4e3a112b[aria-hidden=true]{display:inherit}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"pagination":"rc-pagination-4e3a112b rc-c-pagination-e6314468","page":"rc-page-4e3a112b rc-c-pagination__page-e6314468","no_animation":"rc-no_animation-4e3a112b","page_previous":"rc-page_previous-4e3a112b rc-c-pagination__page--previous-e6314468","page_next":"rc-page_next-4e3a112b rc-c-pagination__page--next-e6314468","page_gap":"rc-page_gap-4e3a112b rc-c-pagination__page--gap-e6314468","is_current":"rc-is_current-4e3a112b rc-is-current-e6314468","is_focused":"rc-is_focused-4e3a112b rc-is-focused-e6314468","is_hovered":"rc-is_hovered-4e3a112b rc-is-hovered-e6314468","is_hidden":"rc-is_hidden-4e3a112b rc-is-hidden-e6314468","is_rtl":"rc-is_rtl-4e3a112b rc-is-rtl-e6314468"}
