'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-buttons.js')

appendStyles({
  css: ".rc-group-b7145207:focus{outline:0}.rc-stretched-b7145207{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"rtl":"rc-rtl-b7145207 rc-is-rtl-26e5b652","group":"rc-group-b7145207 rc-l-btn-group-26e5b652","active":"rc-active-b7145207 rc-is-active-26e5b652","stretched":"rc-stretched-b7145207"}
