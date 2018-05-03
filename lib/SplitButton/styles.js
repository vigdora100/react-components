'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-buttons.js')

appendStyles({
  css: ".rc-group-d50d53cd:focus{outline:0}.rc-stretched-d50d53cd{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"rtl":"rc-rtl-d50d53cd rc-is-rtl-7ebff62d","group":"rc-group-d50d53cd rc-l-btn-group-7ebff62d","active":"rc-active-d50d53cd rc-is-active-7ebff62d","stretched":"rc-stretched-d50d53cd"}
