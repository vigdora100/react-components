'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-forms.js')

appendStyles({
  css: ".rc-stretched-a8b45387{-webkit-box-flex:1;-ms-flex:1;flex:1;width:100%}.rc-message-a8b45387{margin-top:8px}.rc-input-a8b45387{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.rc-hint-a8b45387{margin-bottom:8px}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"stretched":"rc-stretched-a8b45387","txt":"rc-txt-a8b45387 rc-c-txt-27943a54","message":"rc-message-a8b45387 rc-c-txt__message-27943a54","input":"rc-input-a8b45387 rc-c-txt__input-27943a54 rc-c-txt__input--select-27943a54","is_focused":"rc-is_focused-a8b45387 rc-is-focused-27943a54","label":"rc-label-a8b45387 rc-c-txt__label-27943a54","hint":"rc-hint-a8b45387 rc-c-txt__hint-27943a54","size_small":"rc-size_small-a8b45387 rc-c-txt--sm-27943a54","success":"rc-success-a8b45387 rc-has-success-27943a54","warning":"rc-warning-a8b45387 rc-has-warning-27943a54","error":"rc-error-a8b45387 rc-has-error-27943a54","rtl":"rc-rtl-a8b45387 rc-is-rtl-27943a54","open":"rc-open-a8b45387 rc-is-open-27943a54","disabled":"rc-disabled-a8b45387 rc-is-disabled-27943a54"}
