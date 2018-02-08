'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tabs.js')

appendStyles({
  css: ".rc-list-1f4ac09a:focus{outline:0}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"tabs":"rc-tabs-1f4ac09a rc-c-tab-ce114fc2","list":"rc-list-1f4ac09a rc-c-tab__list-ce114fc2","label":"rc-label-1f4ac09a rc-c-tab__list__item-ce114fc2","panel":"rc-panel-1f4ac09a rc-c-tab__panel-ce114fc2","selected":"rc-selected-1f4ac09a rc-is-selected-ce114fc2","focused":"rc-focused-1f4ac09a rc-is-focused-ce114fc2","vertical":"rc-vertical-1f4ac09a rc-c-tab--block-ce114fc2","disabled":"rc-disabled-1f4ac09a rc-is-disabled-ce114fc2","rtl":"rc-rtl-1f4ac09a rc-is-rtl-ce114fc2"}
