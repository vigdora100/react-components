'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-forms.js')

appendStyles({
  css: ".rc-stretched-1eb2558b{-webkit-box-flex:1;-ms-flex:1;flex:1;width:100%}.rc-message-1eb2558b{margin-top:8px}.rc-input-1eb2558b{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.rc-hint-1eb2558b{margin-bottom:8px}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"stretched":"rc-stretched-1eb2558b","txt":"rc-txt-1eb2558b rc-c-txt-c1723a52","message":"rc-message-1eb2558b rc-c-txt__message-c1723a52","input":"rc-input-1eb2558b rc-c-txt__input-c1723a52 rc-c-txt__input--select-c1723a52","is_focused":"rc-is_focused-1eb2558b rc-is-focused-c1723a52","label":"rc-label-1eb2558b rc-c-txt__label-c1723a52","hint":"rc-hint-1eb2558b rc-c-txt__hint-c1723a52","size_small":"rc-size_small-1eb2558b rc-c-txt--sm-c1723a52","success":"rc-success-1eb2558b rc-has-success-c1723a52","warning":"rc-warning-1eb2558b rc-has-warning-c1723a52","error":"rc-error-1eb2558b rc-has-error-c1723a52","rtl":"rc-rtl-1eb2558b rc-is-rtl-c1723a52","open":"rc-open-1eb2558b rc-is-open-c1723a52","disabled":"rc-disabled-1eb2558b rc-is-disabled-c1723a52"}
