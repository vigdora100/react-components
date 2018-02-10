'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-buttons.js')

appendStyles({
  css: ".rc-group-d02e522e:focus{outline:0}.rc-stretched-d02e522e{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"rtl":"rc-rtl-d02e522e rc-is-rtl-966fb655","group":"rc-group-d02e522e rc-l-btn-group-966fb655","active":"rc-active-d02e522e rc-is-active-966fb655","stretched":"rc-stretched-d02e522e"}
