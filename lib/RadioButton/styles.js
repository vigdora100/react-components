'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-forms.js')

appendStyles({
  css: ".rc-muted-5d452f2c{font-weight:400}.rc-message-5d452f2c{display:block}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"checkbox":"rc-checkbox-5d452f2c rc-c-chk-c37eb0c1","radio":"rc-radio-5d452f2c rc-c-chk--radio-c37eb0c1","input":"rc-input-5d452f2c rc-c-chk__input-c37eb0c1","label":"rc-label-5d452f2c rc-c-chk__label-c37eb0c1","rtl":"rc-rtl-5d452f2c rc-is-rtl-c37eb0c1","focused":"rc-focused-5d452f2c rc-is-focused-c37eb0c1","muted":"rc-muted-5d452f2c","hint":"rc-hint-5d452f2c rc-c-chk__hint-c37eb0c1","disabled":"rc-disabled-5d452f2c rc-is-disabled-c37eb0c1","message":"rc-message-5d452f2c rc-c-chk__message-c37eb0c1","success":"rc-success-5d452f2c rc-has-success-c37eb0c1","warning":"rc-warning-5d452f2c rc-has-warning-c37eb0c1","error":"rc-error-5d452f2c rc-has-error-c37eb0c1","noLabel":"rc-noLabel-5d452f2c rc-c-chk--nolabel-c37eb0c1"}
