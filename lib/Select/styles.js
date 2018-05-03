'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-forms.js')

appendStyles({
  css: ".rc-stretched-555757fa{-webkit-box-flex:1;-ms-flex:1;flex:1;width:100%}.rc-message-555757fa{margin-top:8px}.rc-input-555757fa{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.rc-hint-555757fa{margin-bottom:8px}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"stretched":"rc-stretched-555757fa","txt":"rc-txt-555757fa rc-c-txt-c380b0c1","message":"rc-message-555757fa rc-c-txt__message-c380b0c1","input":"rc-input-555757fa rc-c-txt__input-c380b0c1 rc-c-txt__input--select-c380b0c1","is_focused":"rc-is_focused-555757fa rc-is-focused-c380b0c1","label":"rc-label-555757fa rc-c-txt__label-c380b0c1","hint":"rc-hint-555757fa rc-c-txt__hint-c380b0c1","size_small":"rc-size_small-555757fa rc-c-txt--sm-c380b0c1","success":"rc-success-555757fa rc-has-success-c380b0c1","warning":"rc-warning-555757fa rc-has-warning-c380b0c1","error":"rc-error-555757fa rc-has-error-c380b0c1","rtl":"rc-rtl-555757fa rc-is-rtl-c380b0c1","open":"rc-open-555757fa rc-is-open-c380b0c1","disabled":"rc-disabled-555757fa rc-is-disabled-c380b0c1"}
