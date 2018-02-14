'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-buttons.js')

appendStyles({
  css: ".rc-stretched-ca386005{-webkit-box-flex:1;-ms-flex:1;flex:1}.rc-group-ca386005:focus{outline:0}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"active":"rc-active-ca386005 rc-is-active-379f62a","selected":"rc-selected-ca386005 rc-is-selected-379f62a","focused":"rc-focused-ca386005 rc-is-focused-379f62a","danger":"rc-danger-ca386005 rc-c-btn--danger-379f62a","rtl":"rc-rtl-ca386005 rc-is-rtl-379f62a","type_default":"rc-type_default-ca386005 rc-c-btn-379f62a","type_primary":"rc-type_primary-ca386005 rc-c-btn-379f62a rc-c-btn--primary-379f62a","type_basic":"rc-type_basic-ca386005 rc-c-btn-379f62a rc-c-btn--basic-379f62a","type_anchor":"rc-type_anchor-ca386005 rc-c-btn-379f62a rc-c-btn--anchor-379f62a","pill":"rc-pill-ca386005 rc-c-btn--pill-379f62a","size_medium":"rc-size_medium-ca386005 rc-c-btn--medium-379f62a","size_large":"rc-size_large-ca386005 rc-c-btn--large-379f62a","stretched":"rc-stretched-ca386005 rc-c-btn--full-379f62a","disabled":"rc-disabled-ca386005 rc-is-disabled-379f62a","group":"rc-group-ca386005 rc-l-btn-group-379f62a"}
