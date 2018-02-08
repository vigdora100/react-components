'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tabs.js')

appendStyles({
  css: ".rc-list-4d95c0c6:focus{outline:0}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"tabs":"rc-tabs-4d95c0c6 rc-c-tab-be814fc1","list":"rc-list-4d95c0c6 rc-c-tab__list-be814fc1","label":"rc-label-4d95c0c6 rc-c-tab__list__item-be814fc1","panel":"rc-panel-4d95c0c6 rc-c-tab__panel-be814fc1","selected":"rc-selected-4d95c0c6 rc-is-selected-be814fc1","focused":"rc-focused-4d95c0c6 rc-is-focused-be814fc1","vertical":"rc-vertical-4d95c0c6 rc-c-tab--block-be814fc1","disabled":"rc-disabled-4d95c0c6 rc-is-disabled-be814fc1","rtl":"rc-rtl-4d95c0c6 rc-is-rtl-be814fc1"}
