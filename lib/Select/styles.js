'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-forms.js')

appendStyles({
  css: ".rc-stretched-a5415386{-webkit-box-flex:1;-ms-flex:1;flex:1;width:100%}.rc-message-a5415386{margin-top:8px}.rc-input-a5415386{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.rc-hint-a5415386{margin-bottom:8px}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"stretched":"rc-stretched-a5415386","txt":"rc-txt-a5415386 rc-c-txt-74843a53","message":"rc-message-a5415386 rc-c-txt__message-74843a53","input":"rc-input-a5415386 rc-c-txt__input-74843a53 rc-c-txt__input--select-74843a53","is_focused":"rc-is_focused-a5415386 rc-is-focused-74843a53","label":"rc-label-a5415386 rc-c-txt__label-74843a53","hint":"rc-hint-a5415386 rc-c-txt__hint-74843a53","size_small":"rc-size_small-a5415386 rc-c-txt--sm-74843a53","success":"rc-success-a5415386 rc-has-success-74843a53","warning":"rc-warning-a5415386 rc-has-warning-74843a53","error":"rc-error-a5415386 rc-has-error-74843a53","rtl":"rc-rtl-a5415386 rc-is-rtl-74843a53","open":"rc-open-a5415386 rc-is-open-74843a53","disabled":"rc-disabled-a5415386 rc-is-disabled-74843a53"}
