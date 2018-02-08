'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-forms.js')

appendStyles({
  css: ".rc-stretched-48e0534f{-webkit-box-flex:1;-ms-flex:1;flex:1;width:100%}.rc-message-48e0534f{margin-top:8px}.rc-input-48e0534f{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.rc-hint-48e0534f{margin-bottom:8px}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"stretched":"rc-stretched-48e0534f","txt":"rc-txt-48e0534f rc-c-txt-27903a54","message":"rc-message-48e0534f rc-c-txt__message-27903a54","input":"rc-input-48e0534f rc-c-txt__input-27903a54 rc-c-txt__input--select-27903a54","is_focused":"rc-is_focused-48e0534f rc-is-focused-27903a54","label":"rc-label-48e0534f rc-c-txt__label-27903a54","hint":"rc-hint-48e0534f rc-c-txt__hint-27903a54","size_small":"rc-size_small-48e0534f rc-c-txt--sm-27903a54","success":"rc-success-48e0534f rc-has-success-27903a54","warning":"rc-warning-48e0534f rc-has-warning-27903a54","error":"rc-error-48e0534f rc-has-error-27903a54","rtl":"rc-rtl-48e0534f rc-is-rtl-27903a54","open":"rc-open-48e0534f rc-is-open-27903a54","disabled":"rc-disabled-48e0534f rc-is-disabled-27903a54"}
