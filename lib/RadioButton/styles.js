'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-forms.js')

appendStyles({
  css: ".rc-muted-f9b02d2d{font-weight:400}.rc-message-f9b02d2d{display:block}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"checkbox":"rc-checkbox-f9b02d2d rc-c-chk-da953a55","radio":"rc-radio-f9b02d2d rc-c-chk--radio-da953a55","input":"rc-input-f9b02d2d rc-c-chk__input-da953a55","label":"rc-label-f9b02d2d rc-c-chk__label-da953a55","rtl":"rc-rtl-f9b02d2d rc-is-rtl-da953a55","focused":"rc-focused-f9b02d2d rc-is-focused-da953a55","muted":"rc-muted-f9b02d2d","hint":"rc-hint-f9b02d2d rc-c-chk__hint-da953a55","disabled":"rc-disabled-f9b02d2d rc-is-disabled-da953a55","message":"rc-message-f9b02d2d rc-c-chk__message-da953a55","success":"rc-success-f9b02d2d rc-has-success-da953a55","warning":"rc-warning-f9b02d2d rc-has-warning-da953a55","error":"rc-error-f9b02d2d rc-has-error-da953a55","noLabel":"rc-noLabel-f9b02d2d rc-c-chk--nolabel-da953a55"}
