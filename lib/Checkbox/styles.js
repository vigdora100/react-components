'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-forms.js')

appendStyles({
  css: ".rc-muted-dc1232b0{font-weight:400}.rc-message-dc1232b0{display:block}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"checkbox":"rc-checkbox-dc1232b0 rc-c-chk-da933a55","rtl":"rc-rtl-dc1232b0 rc-is-rtl-da933a55","indeterminate":"rc-indeterminate-dc1232b0 rc-is-indeterminate-da933a55","focused":"rc-focused-dc1232b0 rc-is-focused-da933a55","input":"rc-input-dc1232b0 rc-c-chk__input-da933a55","label":"rc-label-dc1232b0 rc-c-chk__label-da933a55","muted":"rc-muted-dc1232b0","hint":"rc-hint-dc1232b0 rc-c-chk__hint-da933a55","disabled":"rc-disabled-dc1232b0 rc-is-disabled-da933a55","message":"rc-message-dc1232b0 rc-c-chk__message-da933a55","success":"rc-success-dc1232b0 rc-has-success-da933a55","warning":"rc-warning-dc1232b0 rc-has-warning-da933a55","error":"rc-error-dc1232b0 rc-has-error-da933a55","noLabel":"rc-noLabel-dc1232b0 rc-c-chk--nolabel-da933a55"}
