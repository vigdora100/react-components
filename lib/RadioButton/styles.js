'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-forms.js')

appendStyles({
  css: ".rc-muted-751f2832{font-weight:400}.rc-message-751f2832{display:block}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"checkbox":"rc-checkbox-751f2832 rc-c-chk-27903a54","radio":"rc-radio-751f2832 rc-c-chk--radio-27903a54","input":"rc-input-751f2832 rc-c-chk__input-27903a54","label":"rc-label-751f2832 rc-c-chk__label-27903a54","rtl":"rc-rtl-751f2832 rc-is-rtl-27903a54","focused":"rc-focused-751f2832 rc-is-focused-27903a54","muted":"rc-muted-751f2832","hint":"rc-hint-751f2832 rc-c-chk__hint-27903a54","disabled":"rc-disabled-751f2832 rc-is-disabled-27903a54","message":"rc-message-751f2832 rc-c-chk__message-27903a54","success":"rc-success-751f2832 rc-has-success-27903a54","warning":"rc-warning-751f2832 rc-has-warning-27903a54","error":"rc-error-751f2832 rc-has-error-27903a54","noLabel":"rc-noLabel-751f2832 rc-c-chk--nolabel-27903a54"}
