'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tabs.js')

appendStyles({
  css: ".rc-list-60e9c0d8:focus{outline:0}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"tabs":"rc-tabs-60e9c0d8 rc-c-tab-be834fc1","list":"rc-list-60e9c0d8 rc-c-tab__list-be834fc1","label":"rc-label-60e9c0d8 rc-c-tab__list__item-be834fc1","panel":"rc-panel-60e9c0d8 rc-c-tab__panel-be834fc1","selected":"rc-selected-60e9c0d8 rc-is-selected-be834fc1","focused":"rc-focused-60e9c0d8 rc-is-focused-be834fc1","vertical":"rc-vertical-60e9c0d8 rc-c-tab--block-be834fc1","disabled":"rc-disabled-60e9c0d8 rc-is-disabled-be834fc1","rtl":"rc-rtl-60e9c0d8 rc-is-rtl-be834fc1"}
