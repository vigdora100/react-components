'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-forms.js')

appendStyles({
  css: ".rc-stretched-858258ac{-webkit-box-flex:1;-ms-flex:1;flex:1;width:100%}.rc-message-858258ac{margin-top:8px}.rc-input-858258ac{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.rc-hint-858258ac{margin-bottom:8px}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"stretched":"rc-stretched-858258ac","txt":"rc-txt-858258ac rc-c-txt-da953a55","message":"rc-message-858258ac rc-c-txt__message-da953a55","input":"rc-input-858258ac rc-c-txt__input-da953a55 rc-c-txt__input--select-da953a55","is_focused":"rc-is_focused-858258ac rc-is-focused-da953a55","label":"rc-label-858258ac rc-c-txt__label-da953a55","hint":"rc-hint-858258ac rc-c-txt__hint-da953a55","size_small":"rc-size_small-858258ac rc-c-txt--sm-da953a55","success":"rc-success-858258ac rc-has-success-da953a55","warning":"rc-warning-858258ac rc-has-warning-da953a55","error":"rc-error-858258ac rc-has-error-da953a55","rtl":"rc-rtl-858258ac rc-is-rtl-da953a55","open":"rc-open-858258ac rc-is-open-da953a55","disabled":"rc-disabled-858258ac rc-is-disabled-da953a55"}
