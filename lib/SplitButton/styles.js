'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-buttons.js')

appendStyles({
  css: ".rc-group-ad4651f6:focus{outline:0}.rc-stretched-ad4651f6{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"rtl":"rc-rtl-ad4651f6 rc-is-rtl-4c13b653","group":"rc-group-ad4651f6 rc-l-btn-group-4c13b653","active":"rc-active-ad4651f6 rc-is-active-4c13b653","stretched":"rc-stretched-ad4651f6"}
