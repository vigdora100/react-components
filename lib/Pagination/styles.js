'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-pagination.js')

appendStyles({
  css: ".rc-pagination-6b76169f:focus{outline:0}.rc-no_animation-6b76169f{transition:none}.rc-is_hidden-6b76169f[aria-hidden=true]{display:inherit}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"pagination":"rc-pagination-6b76169f rc-c-pagination-bc7a446e","page":"rc-page-6b76169f rc-c-pagination__page-bc7a446e","no_animation":"rc-no_animation-6b76169f","page_previous":"rc-page_previous-6b76169f rc-c-pagination__page--previous-bc7a446e","page_next":"rc-page_next-6b76169f rc-c-pagination__page--next-bc7a446e","page_gap":"rc-page_gap-6b76169f rc-c-pagination__page--gap-bc7a446e","is_current":"rc-is_current-6b76169f rc-is-current-bc7a446e","is_focused":"rc-is_focused-6b76169f rc-is-focused-bc7a446e","is_hovered":"rc-is_hovered-6b76169f rc-is-hovered-bc7a446e","is_hidden":"rc-is_hidden-6b76169f rc-is-hidden-bc7a446e","is_rtl":"rc-is_rtl-6b76169f rc-is-rtl-bc7a446e"}
