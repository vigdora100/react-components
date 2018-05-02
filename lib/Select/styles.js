'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-forms.js')

appendStyles({
  css: ".rc-stretched-8c555789{-webkit-box-flex:1;-ms-flex:1;flex:1;width:100%}.rc-message-8c555789{margin-top:8px}.rc-input-8c555789{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.rc-hint-8c555789{margin-bottom:8px}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"stretched":"rc-stretched-8c555789","txt":"rc-txt-8c555789 rc-c-txt-c1cb0c0","message":"rc-message-8c555789 rc-c-txt__message-c1cb0c0","input":"rc-input-8c555789 rc-c-txt__input-c1cb0c0 rc-c-txt__input--select-c1cb0c0","is_focused":"rc-is_focused-8c555789 rc-is-focused-c1cb0c0","label":"rc-label-8c555789 rc-c-txt__label-c1cb0c0","hint":"rc-hint-8c555789 rc-c-txt__hint-c1cb0c0","size_small":"rc-size_small-8c555789 rc-c-txt--sm-c1cb0c0","success":"rc-success-8c555789 rc-has-success-c1cb0c0","warning":"rc-warning-8c555789 rc-has-warning-c1cb0c0","error":"rc-error-8c555789 rc-has-error-c1cb0c0","rtl":"rc-rtl-8c555789 rc-is-rtl-c1cb0c0","open":"rc-open-8c555789 rc-is-open-c1cb0c0","disabled":"rc-disabled-8c555789 rc-is-disabled-c1cb0c0"}
