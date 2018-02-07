'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tabs.js')

appendStyles({
  css: ".rc-list-f60dc251:focus{outline:0}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"tabs":"rc-tabs-f60dc251 rc-c-tab-aef14fc0","list":"rc-list-f60dc251 rc-c-tab__list-aef14fc0","label":"rc-label-f60dc251 rc-c-tab__list__item-aef14fc0","panel":"rc-panel-f60dc251 rc-c-tab__panel-aef14fc0","selected":"rc-selected-f60dc251 rc-is-selected-aef14fc0","focused":"rc-focused-f60dc251 rc-is-focused-aef14fc0","vertical":"rc-vertical-f60dc251 rc-c-tab--block-aef14fc0","disabled":"rc-disabled-f60dc251 rc-is-disabled-aef14fc0","rtl":"rc-rtl-f60dc251 rc-is-rtl-aef14fc0"}
