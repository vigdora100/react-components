'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-buttons.js')

appendStyles({
  css: ".rc-group-b6905206:focus{outline:0}.rc-stretched-b6905206{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"rtl":"rc-rtl-b6905206 rc-is-rtl-713db654","group":"rc-group-b6905206 rc-l-btn-group-713db654","active":"rc-active-b6905206 rc-is-active-713db654","stretched":"rc-stretched-b6905206"}
