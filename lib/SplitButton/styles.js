'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-buttons.js')

appendStyles({
  css: ".rc-group-f1da5161:focus{outline:0}.rc-stretched-f1da5161{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"rtl":"rc-rtl-f1da5161 rc-is-rtl-1b9b651","group":"rc-group-f1da5161 rc-l-btn-group-1b9b651","active":"rc-active-f1da5161 rc-is-active-1b9b651","stretched":"rc-stretched-f1da5161"}
