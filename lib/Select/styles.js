'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-forms.js')

appendStyles({
  css: ".rc-stretched-7557536a{-webkit-box-flex:1;-ms-flex:1;flex:1;width:100%}.rc-message-7557536a{margin-top:8px}.rc-input-7557536a{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.rc-hint-7557536a{margin-bottom:8px}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"stretched":"rc-stretched-7557536a","txt":"rc-txt-7557536a rc-c-txt-74823a53","message":"rc-message-7557536a rc-c-txt__message-74823a53","input":"rc-input-7557536a rc-c-txt__input-74823a53 rc-c-txt__input--select-74823a53","is_focused":"rc-is_focused-7557536a rc-is-focused-74823a53","label":"rc-label-7557536a rc-c-txt__label-74823a53","hint":"rc-hint-7557536a rc-c-txt__hint-74823a53","size_small":"rc-size_small-7557536a rc-c-txt--sm-74823a53","success":"rc-success-7557536a rc-has-success-74823a53","warning":"rc-warning-7557536a rc-has-warning-74823a53","error":"rc-error-7557536a rc-has-error-74823a53","rtl":"rc-rtl-7557536a rc-is-rtl-74823a53","open":"rc-open-7557536a rc-is-open-74823a53","disabled":"rc-disabled-7557536a rc-is-disabled-74823a53"}
