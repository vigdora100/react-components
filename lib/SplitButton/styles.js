'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-buttons.js')

appendStyles({
  css: ".rc-group-6e7f5192:focus{outline:0}.rc-stretched-6e7f5192{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"rtl":"rc-rtl-6e7f5192 rc-is-rtl-9671b655","group":"rc-group-6e7f5192 rc-l-btn-group-9671b655","active":"rc-active-6e7f5192 rc-is-active-9671b655","stretched":"rc-stretched-6e7f5192"}
