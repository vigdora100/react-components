'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-pagination.js')

appendStyles({
  css: ".rc-pagination-22661111:focus{outline:0}.rc-no_animation-22661111{transition:none}.rc-is_hidden-22661111[aria-hidden=true]{display:inherit}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"pagination":"rc-pagination-22661111 rc-c-pagination-7514446c","page":"rc-page-22661111 rc-c-pagination__page-7514446c","no_animation":"rc-no_animation-22661111","page_previous":"rc-page_previous-22661111 rc-c-pagination__page--previous-7514446c","page_next":"rc-page_next-22661111 rc-c-pagination__page--next-7514446c","page_gap":"rc-page_gap-22661111 rc-c-pagination__page--gap-7514446c","is_current":"rc-is_current-22661111 rc-is-current-7514446c","is_focused":"rc-is_focused-22661111 rc-is-focused-7514446c","is_hovered":"rc-is_hovered-22661111 rc-is-hovered-7514446c","is_hidden":"rc-is_hidden-22661111 rc-is-hidden-7514446c","is_rtl":"rc-is_rtl-22661111 rc-is-rtl-7514446c"}
