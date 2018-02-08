'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-buttons.js')

appendStyles({
  css: ".rc-group-b10a51fc:focus{outline:0}.rc-stretched-b10a51fc{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"rtl":"rc-rtl-b10a51fc rc-is-rtl-4c15b653","group":"rc-group-b10a51fc rc-l-btn-group-4c15b653","active":"rc-active-b10a51fc rc-is-active-4c15b653","stretched":"rc-stretched-b10a51fc"}
