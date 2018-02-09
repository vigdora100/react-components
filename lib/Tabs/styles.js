'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tabs.js')

appendStyles({
  css: ".rc-list-45f2c0be:focus{outline:0}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"tabs":"rc-tabs-45f2c0be rc-c-tab-ce154fc2","list":"rc-list-45f2c0be rc-c-tab__list-ce154fc2","label":"rc-label-45f2c0be rc-c-tab__list__item-ce154fc2","panel":"rc-panel-45f2c0be rc-c-tab__panel-ce154fc2","selected":"rc-selected-45f2c0be rc-is-selected-ce154fc2","focused":"rc-focused-45f2c0be rc-is-focused-ce154fc2","vertical":"rc-vertical-45f2c0be rc-c-tab--block-ce154fc2","disabled":"rc-disabled-45f2c0be rc-is-disabled-ce154fc2","rtl":"rc-rtl-45f2c0be rc-is-rtl-ce154fc2"}
