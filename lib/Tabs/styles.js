'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tabs.js')

appendStyles({
  css: ".rc-list-af0c43c:focus{outline:0}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"tabs":"rc-tabs-af0c43c rc-c-tab-fccb4fc5","list":"rc-list-af0c43c rc-c-tab__list-fccb4fc5","label":"rc-label-af0c43c rc-c-tab__list__item-fccb4fc5","panel":"rc-panel-af0c43c rc-c-tab__panel-fccb4fc5","selected":"rc-selected-af0c43c rc-is-selected-fccb4fc5","focused":"rc-focused-af0c43c rc-is-focused-fccb4fc5","vertical":"rc-vertical-af0c43c rc-c-tab--block-fccb4fc5","disabled":"rc-disabled-af0c43c rc-is-disabled-fccb4fc5","rtl":"rc-rtl-af0c43c rc-is-rtl-fccb4fc5"}
