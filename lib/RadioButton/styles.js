'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-forms.js')

appendStyles({
  css: ".rc-muted-c3d2a50{font-weight:400}.rc-message-c3d2a50{display:block}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"checkbox":"rc-checkbox-c3d2a50 rc-c-chk-5b633a50","radio":"rc-radio-c3d2a50 rc-c-chk--radio-5b633a50","input":"rc-input-c3d2a50 rc-c-chk__input-5b633a50","label":"rc-label-c3d2a50 rc-c-chk__label-5b633a50","rtl":"rc-rtl-c3d2a50 rc-is-rtl-5b633a50","focused":"rc-focused-c3d2a50 rc-is-focused-5b633a50","muted":"rc-muted-c3d2a50","hint":"rc-hint-c3d2a50 rc-c-chk__hint-5b633a50","disabled":"rc-disabled-c3d2a50 rc-is-disabled-5b633a50","message":"rc-message-c3d2a50 rc-c-chk__message-5b633a50","success":"rc-success-c3d2a50 rc-has-success-5b633a50","warning":"rc-warning-c3d2a50 rc-has-warning-5b633a50","error":"rc-error-c3d2a50 rc-has-error-5b633a50","noLabel":"rc-noLabel-c3d2a50 rc-c-chk--nolabel-5b633a50"}
