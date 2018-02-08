'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-forms.js')

appendStyles({
  css: ".rc-muted-ca822865{font-weight:400}.rc-message-ca822865{display:block}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"checkbox":"rc-checkbox-ca822865 rc-c-chk-74843a53","radio":"rc-radio-ca822865 rc-c-chk--radio-74843a53","input":"rc-input-ca822865 rc-c-chk__input-74843a53","label":"rc-label-ca822865 rc-c-chk__label-74843a53","rtl":"rc-rtl-ca822865 rc-is-rtl-74843a53","focused":"rc-focused-ca822865 rc-is-focused-74843a53","muted":"rc-muted-ca822865","hint":"rc-hint-ca822865 rc-c-chk__hint-74843a53","disabled":"rc-disabled-ca822865 rc-is-disabled-74843a53","message":"rc-message-ca822865 rc-c-chk__message-74843a53","success":"rc-success-ca822865 rc-has-success-74843a53","warning":"rc-warning-ca822865 rc-has-warning-74843a53","error":"rc-error-ca822865 rc-has-error-74843a53","noLabel":"rc-noLabel-ca822865 rc-c-chk--nolabel-74843a53"}
