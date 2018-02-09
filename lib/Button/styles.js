'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-buttons.js')

appendStyles({
  css: ".rc-stretched-15c35fdf{-webkit-box-flex:1;-ms-flex:1;flex:1}.rc-group-15c35fdf:focus{outline:0}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"active":"rc-active-15c35fdf rc-is-active-7143b654","selected":"rc-selected-15c35fdf rc-is-selected-7143b654","focused":"rc-focused-15c35fdf rc-is-focused-7143b654","danger":"rc-danger-15c35fdf rc-c-btn--danger-7143b654","rtl":"rc-rtl-15c35fdf rc-is-rtl-7143b654","type_default":"rc-type_default-15c35fdf rc-c-btn-7143b654","type_primary":"rc-type_primary-15c35fdf rc-c-btn-7143b654 rc-c-btn--primary-7143b654","type_basic":"rc-type_basic-15c35fdf rc-c-btn-7143b654 rc-c-btn--basic-7143b654","type_anchor":"rc-type_anchor-15c35fdf rc-c-btn-7143b654 rc-c-btn--anchor-7143b654","pill":"rc-pill-15c35fdf rc-c-btn--pill-7143b654","size_medium":"rc-size_medium-15c35fdf rc-c-btn--medium-7143b654","size_large":"rc-size_large-15c35fdf rc-c-btn--large-7143b654","stretched":"rc-stretched-15c35fdf rc-c-btn--full-7143b654","disabled":"rc-disabled-15c35fdf rc-is-disabled-7143b654","group":"rc-group-15c35fdf rc-l-btn-group-7143b654"}
