'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-pagination.js')

appendStyles({
  css: ".rc-pagination-3e600fa6:focus{outline:0}.rc-no_animation-3e600fa6{transition:none}.rc-is_hidden-3e600fa6[aria-hidden=true]{display:inherit}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"pagination":"rc-pagination-3e600fa6 rc-c-pagination-9f84469","page":"rc-page-3e600fa6 rc-c-pagination__page-9f84469","no_animation":"rc-no_animation-3e600fa6","page_previous":"rc-page_previous-3e600fa6 rc-c-pagination__page--previous-9f84469","page_next":"rc-page_next-3e600fa6 rc-c-pagination__page--next-9f84469","page_gap":"rc-page_gap-3e600fa6 rc-c-pagination__page--gap-9f84469","is_current":"rc-is_current-3e600fa6 rc-is-current-9f84469","is_focused":"rc-is_focused-3e600fa6 rc-is-focused-9f84469","is_hovered":"rc-is_hovered-3e600fa6 rc-is-hovered-9f84469","is_hidden":"rc-is_hidden-3e600fa6 rc-is-hidden-9f84469","is_rtl":"rc-is_rtl-3e600fa6 rc-is-rtl-9f84469"}
