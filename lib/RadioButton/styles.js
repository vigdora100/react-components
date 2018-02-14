'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-forms.js')

appendStyles({
  css: ".rc-muted-88ba2f50{font-weight:400}.rc-message-88ba2f50{display:block}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"checkbox":"rc-checkbox-88ba2f50 rc-c-chk-9d32b0be","radio":"rc-radio-88ba2f50 rc-c-chk--radio-9d32b0be","input":"rc-input-88ba2f50 rc-c-chk__input-9d32b0be","label":"rc-label-88ba2f50 rc-c-chk__label-9d32b0be","rtl":"rc-rtl-88ba2f50 rc-is-rtl-9d32b0be","focused":"rc-focused-88ba2f50 rc-is-focused-9d32b0be","muted":"rc-muted-88ba2f50","hint":"rc-hint-88ba2f50 rc-c-chk__hint-9d32b0be","disabled":"rc-disabled-88ba2f50 rc-is-disabled-9d32b0be","message":"rc-message-88ba2f50 rc-c-chk__message-9d32b0be","success":"rc-success-88ba2f50 rc-has-success-9d32b0be","warning":"rc-warning-88ba2f50 rc-has-warning-9d32b0be","error":"rc-error-88ba2f50 rc-has-error-9d32b0be","noLabel":"rc-noLabel-88ba2f50 rc-c-chk--nolabel-9d32b0be"}
