'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-buttons.js')

appendStyles({
  css: ".rc-group-1ca552a9:focus{outline:0}.rc-stretched-1ca552a9{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"rtl":"rc-rtl-1ca552a9 rc-is-rtl-55a9f62c","group":"rc-group-1ca552a9 rc-l-btn-group-55a9f62c","active":"rc-active-1ca552a9 rc-is-active-55a9f62c","stretched":"rc-stretched-1ca552a9"}
