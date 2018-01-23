'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tabs.js')

appendStyles({
  css: ".rc-list-eefac24a:focus{outline:0}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"tabs":"rc-tabs-eefac24a rc-c-tab-ce0b4fc2","list":"rc-list-eefac24a rc-c-tab__list-ce0b4fc2","label":"rc-label-eefac24a rc-c-tab__list__item-ce0b4fc2","panel":"rc-panel-eefac24a rc-c-tab__panel-ce0b4fc2","selected":"rc-selected-eefac24a rc-is-selected-ce0b4fc2","focused":"rc-focused-eefac24a rc-is-focused-ce0b4fc2","vertical":"rc-vertical-eefac24a rc-c-tab--block-ce0b4fc2","disabled":"rc-disabled-eefac24a rc-is-disabled-ce0b4fc2","rtl":"rc-rtl-eefac24a rc-is-rtl-ce0b4fc2"}
