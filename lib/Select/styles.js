'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-forms.js')

appendStyles({
  css: ".rc-stretched-55985890{-webkit-box-flex:1;-ms-flex:1;flex:1;width:100%}.rc-message-55985890{margin-top:8px}.rc-input-55985890{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.rc-hint-55985890{margin-bottom:8px}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"stretched":"rc-stretched-55985890","txt":"rc-txt-55985890 rc-c-txt-da933a55","message":"rc-message-55985890 rc-c-txt__message-da933a55","input":"rc-input-55985890 rc-c-txt__input-da933a55 rc-c-txt__input--select-da933a55","is_focused":"rc-is_focused-55985890 rc-is-focused-da933a55","label":"rc-label-55985890 rc-c-txt__label-da933a55","hint":"rc-hint-55985890 rc-c-txt__hint-da933a55","size_small":"rc-size_small-55985890 rc-c-txt--sm-da933a55","success":"rc-success-55985890 rc-has-success-da933a55","warning":"rc-warning-55985890 rc-has-warning-da933a55","error":"rc-error-55985890 rc-has-error-da933a55","rtl":"rc-rtl-55985890 rc-is-rtl-da933a55","open":"rc-open-55985890 rc-is-open-da933a55","disabled":"rc-disabled-55985890 rc-is-disabled-da933a55"}
