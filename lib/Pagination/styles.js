'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-pagination.js')

appendStyles({
  css: ".rc-pagination-b621505:focus{outline:0}.rc-no_animation-b621505{transition:none}.rc-is_hidden-b621505[aria-hidden=true]{display:inherit}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"pagination":"rc-pagination-b621505 rc-c-pagination-bc78446e","page":"rc-page-b621505 rc-c-pagination__page-bc78446e","no_animation":"rc-no_animation-b621505","page_previous":"rc-page_previous-b621505 rc-c-pagination__page--previous-bc78446e","page_next":"rc-page_next-b621505 rc-c-pagination__page--next-bc78446e","page_gap":"rc-page_gap-b621505 rc-c-pagination__page--gap-bc78446e","is_current":"rc-is_current-b621505 rc-is-current-bc78446e","is_focused":"rc-is_focused-b621505 rc-is-focused-bc78446e","is_hovered":"rc-is_hovered-b621505 rc-is-hovered-bc78446e","is_hidden":"rc-is_hidden-b621505 rc-is-hidden-bc78446e","is_rtl":"rc-is_rtl-b621505 rc-is-rtl-bc78446e"}
