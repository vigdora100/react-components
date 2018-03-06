'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-buttons.js')

appendStyles({
  css: ".rc-group-10ec5296:focus{outline:0}.rc-stretched-10ec5296{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"rtl":"rc-rtl-10ec5296 rc-is-rtl-2c91f62b","group":"rc-group-10ec5296 rc-l-btn-group-2c91f62b","active":"rc-active-10ec5296 rc-is-active-2c91f62b","stretched":"rc-stretched-10ec5296"}
