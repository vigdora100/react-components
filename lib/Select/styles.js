'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-forms.js')

appendStyles({
  css: ".rc-stretched-2ca45597{-webkit-box-flex:1;-ms-flex:1;flex:1;width:100%}.rc-message-2ca45597{margin-top:8px}.rc-input-2ca45597{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.rc-hint-2ca45597{margin-bottom:8px}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"stretched":"rc-stretched-2ca45597","txt":"rc-txt-2ca45597 rc-c-txt-5b633a50","message":"rc-message-2ca45597 rc-c-txt__message-5b633a50","input":"rc-input-2ca45597 rc-c-txt__input-5b633a50 rc-c-txt__input--select-5b633a50","is_focused":"rc-is_focused-2ca45597 rc-is-focused-5b633a50","label":"rc-label-2ca45597 rc-c-txt__label-5b633a50","hint":"rc-hint-2ca45597 rc-c-txt__hint-5b633a50","size_small":"rc-size_small-2ca45597 rc-c-txt--sm-5b633a50","success":"rc-success-2ca45597 rc-has-success-5b633a50","warning":"rc-warning-2ca45597 rc-has-warning-5b633a50","error":"rc-error-2ca45597 rc-has-error-5b633a50","rtl":"rc-rtl-2ca45597 rc-is-rtl-5b633a50","open":"rc-open-2ca45597 rc-is-open-5b633a50","disabled":"rc-disabled-2ca45597 rc-is-disabled-5b633a50"}
