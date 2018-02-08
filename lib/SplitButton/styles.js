'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-buttons.js')

appendStyles({
  css: ".rc-group-ba54520c:focus{outline:0}.rc-stretched-ba54520c{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"rtl":"rc-rtl-ba54520c rc-is-rtl-713fb654","group":"rc-group-ba54520c rc-l-btn-group-713fb654","active":"rc-active-ba54520c rc-is-active-713fb654","stretched":"rc-stretched-ba54520c"}
