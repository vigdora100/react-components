'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-forms.js')

appendStyles({
  css: ".rc-muted-ca781600{font-weight:400}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"toggle":"rc-toggle-ca781600 rc-c-chk-27903a54 rc-c-chk--toggle-27903a54","rtl":"rc-rtl-ca781600 rc-is-rtl-27903a54","focused":"rc-focused-ca781600 rc-is-focused-27903a54","input":"rc-input-ca781600 rc-c-chk__input-27903a54","label":"rc-label-ca781600 rc-c-chk__label-27903a54","muted":"rc-muted-ca781600","hint":"rc-hint-ca781600 rc-c-chk__hint-27903a54","disabled":"rc-disabled-ca781600 rc-is-disabled-27903a54","message":"rc-message-ca781600 rc-c-chk__message-27903a54","success":"rc-success-ca781600 rc-has-success-27903a54","warning":"rc-warning-ca781600 rc-has-warning-27903a54","error":"rc-error-ca781600 rc-has-error-27903a54","noLabel":"rc-noLabel-ca781600 rc-c-chk--nolabel-27903a54"}
