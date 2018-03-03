'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tabs.js')

appendStyles({
  css: ".rc-list-5ca8bda1:focus{outline:0}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"tabs":"rc-tabs-5ca8bda1 rc-c-tab-c684fc6","list":"rc-list-5ca8bda1 rc-c-tab__list-c684fc6","label":"rc-label-5ca8bda1 rc-c-tab__list__item-c684fc6","panel":"rc-panel-5ca8bda1 rc-c-tab__panel-c684fc6","selected":"rc-selected-5ca8bda1 rc-is-selected-c684fc6","focused":"rc-focused-5ca8bda1 rc-is-focused-c684fc6","vertical":"rc-vertical-5ca8bda1 rc-c-tab--block-c684fc6","disabled":"rc-disabled-5ca8bda1 rc-is-disabled-c684fc6","rtl":"rc-rtl-5ca8bda1 rc-is-rtl-c684fc6"}
