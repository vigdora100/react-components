'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tabs.js')

appendStyles({
  css: ".rc-list-ec74c425:focus{outline:0}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"tabs":"rc-tabs-ec74c425 rc-c-tab-aeef4fc0","list":"rc-list-ec74c425 rc-c-tab__list-aeef4fc0","label":"rc-label-ec74c425 rc-c-tab__list__item-aeef4fc0","panel":"rc-panel-ec74c425 rc-c-tab__panel-aeef4fc0","selected":"rc-selected-ec74c425 rc-is-selected-aeef4fc0","focused":"rc-focused-ec74c425 rc-is-focused-aeef4fc0","vertical":"rc-vertical-ec74c425 rc-c-tab--block-aeef4fc0","disabled":"rc-disabled-ec74c425 rc-is-disabled-aeef4fc0","rtl":"rc-rtl-ec74c425 rc-is-rtl-aeef4fc0"}
