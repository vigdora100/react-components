'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-buttons.js')

appendStyles({
  css: ".rc-group-5c695176:focus{outline:0}.rc-stretched-5c695176{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"rtl":"rc-rtl-5c695176 rc-is-rtl-7143b654","group":"rc-group-5c695176 rc-l-btn-group-7143b654","active":"rc-active-5c695176 rc-is-active-7143b654","stretched":"rc-stretched-5c695176"}
