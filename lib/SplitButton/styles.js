'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-buttons.js')

appendStyles({
  css: ".rc-group-18e152a3:focus{outline:0}.rc-stretched-18e152a3{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"rtl":"rc-rtl-18e152a3 rc-is-rtl-55a7f62c","group":"rc-group-18e152a3 rc-l-btn-group-55a7f62c","active":"rc-active-18e152a3 rc-is-active-55a7f62c","stretched":"rc-stretched-18e152a3"}
