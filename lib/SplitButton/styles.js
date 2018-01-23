'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-buttons.js')

appendStyles({
  css: ".rc-group-65c15185:focus{outline:0}.rc-stretched-65c15185{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"rtl":"rc-rtl-65c15185 rc-is-rtl-7139b654","group":"rc-group-65c15185 rc-l-btn-group-7139b654","active":"rc-active-65c15185 rc-is-active-7139b654","stretched":"rc-stretched-65c15185"}
