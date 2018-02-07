'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-forms.js')

appendStyles({
  css: ".rc-muted-2fb12ffc{font-weight:400}.rc-message-2fb12ffc{display:block}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"checkbox":"rc-checkbox-2fb12ffc rc-c-chk-c1743a52","rtl":"rc-rtl-2fb12ffc rc-is-rtl-c1743a52","indeterminate":"rc-indeterminate-2fb12ffc rc-is-indeterminate-c1743a52","focused":"rc-focused-2fb12ffc rc-is-focused-c1743a52","input":"rc-input-2fb12ffc rc-c-chk__input-c1743a52","label":"rc-label-2fb12ffc rc-c-chk__label-c1743a52","muted":"rc-muted-2fb12ffc","hint":"rc-hint-2fb12ffc rc-c-chk__hint-c1743a52","disabled":"rc-disabled-2fb12ffc rc-is-disabled-c1743a52","message":"rc-message-2fb12ffc rc-c-chk__message-c1743a52","success":"rc-success-2fb12ffc rc-has-success-c1743a52","warning":"rc-warning-2fb12ffc rc-has-warning-c1743a52","error":"rc-error-2fb12ffc rc-has-error-c1743a52","noLabel":"rc-noLabel-2fb12ffc rc-c-chk--nolabel-c1743a52"}
