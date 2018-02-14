'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-forms.js')

appendStyles({
  css: ".rc-muted-8b132ca{font-weight:400}.rc-message-8b132ca{display:block}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"checkbox":"rc-checkbox-8b132ca rc-c-chk-da953a55","rtl":"rc-rtl-8b132ca rc-is-rtl-da953a55","indeterminate":"rc-indeterminate-8b132ca rc-is-indeterminate-da953a55","focused":"rc-focused-8b132ca rc-is-focused-da953a55","input":"rc-input-8b132ca rc-c-chk__input-da953a55","label":"rc-label-8b132ca rc-c-chk__label-da953a55","muted":"rc-muted-8b132ca","hint":"rc-hint-8b132ca rc-c-chk__hint-da953a55","disabled":"rc-disabled-8b132ca rc-is-disabled-da953a55","message":"rc-message-8b132ca rc-c-chk__message-da953a55","success":"rc-success-8b132ca rc-has-success-da953a55","warning":"rc-warning-8b132ca rc-has-warning-da953a55","error":"rc-error-8b132ca rc-has-error-da953a55","noLabel":"rc-noLabel-8b132ca rc-c-chk--nolabel-da953a55"}
