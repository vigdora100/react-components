'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tabs.js')

appendStyles({
  css: ".rc-list-7e07c0f1:focus{outline:0}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"tabs":"rc-tabs-7e07c0f1 rc-c-tab-2b8a4fc8","list":"rc-list-7e07c0f1 rc-c-tab__list-2b8a4fc8","label":"rc-label-7e07c0f1 rc-c-tab__list__item-2b8a4fc8","panel":"rc-panel-7e07c0f1 rc-c-tab__panel-2b8a4fc8","selected":"rc-selected-7e07c0f1 rc-is-selected-2b8a4fc8","focused":"rc-focused-7e07c0f1 rc-is-focused-2b8a4fc8","vertical":"rc-vertical-7e07c0f1 rc-c-tab--block-2b8a4fc8","disabled":"rc-disabled-7e07c0f1 rc-is-disabled-2b8a4fc8","rtl":"rc-rtl-7e07c0f1 rc-is-rtl-2b8a4fc8"}
