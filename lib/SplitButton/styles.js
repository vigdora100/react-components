'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-buttons.js')

appendStyles({
  css: ".rc-group-d14953c7:focus{outline:0}.rc-stretched-d14953c7{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"rtl":"rc-rtl-d14953c7 rc-is-rtl-7ebdf62d","group":"rc-group-d14953c7 rc-l-btn-group-7ebdf62d","active":"rc-active-d14953c7 rc-is-active-7ebdf62d","stretched":"rc-stretched-d14953c7"}
