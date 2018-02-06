'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tabs.js')

appendStyles({
  css: ".rc-list-15b1c26e:focus{outline:0}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"tabs":"rc-tabs-15b1c26e rc-c-tab-ce0f4fc2","list":"rc-list-15b1c26e rc-c-tab__list-ce0f4fc2","label":"rc-label-15b1c26e rc-c-tab__list__item-ce0f4fc2","panel":"rc-panel-15b1c26e rc-c-tab__panel-ce0f4fc2","selected":"rc-selected-15b1c26e rc-is-selected-ce0f4fc2","focused":"rc-focused-15b1c26e rc-is-focused-ce0f4fc2","vertical":"rc-vertical-15b1c26e rc-c-tab--block-ce0f4fc2","disabled":"rc-disabled-15b1c26e rc-is-disabled-ce0f4fc2","rtl":"rc-rtl-15b1c26e rc-is-rtl-ce0f4fc2"}
