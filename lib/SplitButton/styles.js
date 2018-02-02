'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-buttons.js')

appendStyles({
  css: ".rc-group-a98251f0:focus{outline:0}.rc-stretched-a98251f0{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"rtl":"rc-rtl-a98251f0 rc-is-rtl-4c11b653","group":"rc-group-a98251f0 rc-l-btn-group-4c11b653","active":"rc-active-a98251f0 rc-is-active-4c11b653","stretched":"rc-stretched-a98251f0"}
