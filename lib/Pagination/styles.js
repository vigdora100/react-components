'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-pagination.js')

appendStyles({
  css: ".rc-pagination-21100f92:focus{outline:0}.rc-no_animation-21100f92{transition:none}.rc-is_hidden-21100f92[aria-hidden=true]{display:inherit}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"pagination":"rc-pagination-21100f92 rc-c-pagination-9f64469","page":"rc-page-21100f92 rc-c-pagination__page-9f64469","no_animation":"rc-no_animation-21100f92","page_previous":"rc-page_previous-21100f92 rc-c-pagination__page--previous-9f64469","page_next":"rc-page_next-21100f92 rc-c-pagination__page--next-9f64469","page_gap":"rc-page_gap-21100f92 rc-c-pagination__page--gap-9f64469","is_current":"rc-is_current-21100f92 rc-is-current-9f64469","is_focused":"rc-is_focused-21100f92 rc-is-focused-9f64469","is_hovered":"rc-is_hovered-21100f92 rc-is-hovered-9f64469","is_hidden":"rc-is_hidden-21100f92 rc-is-hidden-9f64469","is_rtl":"rc-is_rtl-21100f92 rc-is-rtl-9f64469"}
