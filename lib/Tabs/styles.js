'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tabs.js')

appendStyles({
  css: ".rc-list-e306bf12:focus{outline:0}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"tabs":"rc-tabs-e306bf12 rc-c-tab-c6a4fc6","list":"rc-list-e306bf12 rc-c-tab__list-c6a4fc6","label":"rc-label-e306bf12 rc-c-tab__list__item-c6a4fc6","panel":"rc-panel-e306bf12 rc-c-tab__panel-c6a4fc6","selected":"rc-selected-e306bf12 rc-is-selected-c6a4fc6","focused":"rc-focused-e306bf12 rc-is-focused-c6a4fc6","vertical":"rc-vertical-e306bf12 rc-c-tab--block-c6a4fc6","disabled":"rc-disabled-e306bf12 rc-is-disabled-c6a4fc6","rtl":"rc-rtl-e306bf12 rc-is-rtl-c6a4fc6"}
