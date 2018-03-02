'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-buttons.js')

appendStyles({
  css: ".rc-group-729b5332:focus{outline:0}.rc-stretched-729b5332{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"rtl":"rc-rtl-729b5332 rc-is-rtl-2c8ff62b","group":"rc-group-729b5332 rc-l-btn-group-2c8ff62b","active":"rc-active-729b5332 rc-is-active-2c8ff62b","stretched":"rc-stretched-729b5332"}
