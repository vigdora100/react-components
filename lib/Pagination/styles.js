'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-pagination.js')

appendStyles({
  css: ".rc-pagination-f36d1655:focus{outline:0}.rc-no_animation-f36d1655{transition:none}.rc-is_hidden-f36d1655[aria-hidden=true]{display:inherit}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"pagination":"rc-pagination-f36d1655 rc-c-pagination-2dac446a","page":"rc-page-f36d1655 rc-c-pagination__page-2dac446a","no_animation":"rc-no_animation-f36d1655","page_previous":"rc-page_previous-f36d1655 rc-c-pagination__page--previous-2dac446a","page_next":"rc-page_next-f36d1655 rc-c-pagination__page--next-2dac446a","page_gap":"rc-page_gap-f36d1655 rc-c-pagination__page--gap-2dac446a","is_current":"rc-is_current-f36d1655 rc-is-current-2dac446a","is_focused":"rc-is_focused-f36d1655 rc-is-focused-2dac446a","is_hovered":"rc-is_hovered-f36d1655 rc-is-hovered-2dac446a","is_hidden":"rc-is_hidden-f36d1655 rc-is-hidden-2dac446a","is_rtl":"rc-is_rtl-f36d1655 rc-is-rtl-2dac446a"}
