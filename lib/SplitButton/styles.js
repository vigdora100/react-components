'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-buttons.js')

appendStyles({
  css: ".rc-group-bad8520d:focus{outline:0}.rc-stretched-bad8520d{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"rtl":"rc-rtl-bad8520d rc-is-rtl-26e7b652","group":"rc-group-bad8520d rc-l-btn-group-26e7b652","active":"rc-active-bad8520d rc-is-active-26e7b652","stretched":"rc-stretched-bad8520d"}
