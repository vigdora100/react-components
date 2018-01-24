'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-buttons.js')

appendStyles({
  css: ".rc-group-6640531c:focus{outline:0}.rc-stretched-6640531c{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"rtl":"rc-rtl-6640531c rc-is-rtl-dc7cb650","group":"rc-group-6640531c rc-l-btn-group-dc7cb650","active":"rc-active-6640531c rc-is-active-dc7cb650","stretched":"rc-stretched-6640531c"}
