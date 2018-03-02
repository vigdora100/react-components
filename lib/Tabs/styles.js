'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tabs.js')

appendStyles({
  css: ".rc-list-7ebfc2cb:focus{outline:0}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"tabs":"rc-tabs-7ebfc2cb rc-c-tab-fcc94fc5","list":"rc-list-7ebfc2cb rc-c-tab__list-fcc94fc5","label":"rc-label-7ebfc2cb rc-c-tab__list__item-fcc94fc5","panel":"rc-panel-7ebfc2cb rc-c-tab__panel-fcc94fc5","selected":"rc-selected-7ebfc2cb rc-is-selected-fcc94fc5","focused":"rc-focused-7ebfc2cb rc-is-focused-fcc94fc5","vertical":"rc-vertical-7ebfc2cb rc-c-tab--block-fcc94fc5","disabled":"rc-disabled-7ebfc2cb rc-is-disabled-fcc94fc5","rtl":"rc-rtl-7ebfc2cb rc-is-rtl-fcc94fc5"}
