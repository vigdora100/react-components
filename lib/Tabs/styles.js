'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tabs.js')

appendStyles({
  css: ".rc-list-f612bf24:focus{outline:0}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"tabs":"rc-tabs-f612bf24 rc-c-tab-c6c4fc6","list":"rc-list-f612bf24 rc-c-tab__list-c6c4fc6","label":"rc-label-f612bf24 rc-c-tab__list__item-c6c4fc6","panel":"rc-panel-f612bf24 rc-c-tab__panel-c6c4fc6","selected":"rc-selected-f612bf24 rc-is-selected-c6c4fc6","focused":"rc-focused-f612bf24 rc-is-focused-c6c4fc6","vertical":"rc-vertical-f612bf24 rc-c-tab--block-c6c4fc6","disabled":"rc-disabled-f612bf24 rc-is-disabled-c6c4fc6","rtl":"rc-rtl-f612bf24 rc-is-rtl-c6c4fc6"}
