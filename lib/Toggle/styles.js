'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-forms.js')

appendStyles({
  css: ".rc-muted-e80719ed{font-weight:400}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"toggle":"rc-toggle-e80719ed rc-c-chk-c1cb0c0 rc-c-chk--toggle-c1cb0c0","rtl":"rc-rtl-e80719ed rc-is-rtl-c1cb0c0","focused":"rc-focused-e80719ed rc-is-focused-c1cb0c0","input":"rc-input-e80719ed rc-c-chk__input-c1cb0c0","label":"rc-label-e80719ed rc-c-chk__label-c1cb0c0","muted":"rc-muted-e80719ed","hint":"rc-hint-e80719ed rc-c-chk__hint-c1cb0c0","disabled":"rc-disabled-e80719ed rc-is-disabled-c1cb0c0","message":"rc-message-e80719ed rc-c-chk__message-c1cb0c0","success":"rc-success-e80719ed rc-has-success-c1cb0c0","warning":"rc-warning-e80719ed rc-has-warning-c1cb0c0","error":"rc-error-e80719ed rc-has-error-c1cb0c0","noLabel":"rc-noLabel-e80719ed rc-c-chk--nolabel-c1cb0c0"}
