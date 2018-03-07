'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-forms.js')

appendStyles({
  css: ".rc-stretched-5d21576d{-webkit-box-flex:1;-ms-flex:1;flex:1;width:100%}.rc-message-5d21576d{margin-top:8px}.rc-input-5d21576d{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.rc-hint-5d21576d{margin-bottom:8px}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"stretched":"rc-stretched-5d21576d","txt":"rc-txt-5d21576d rc-c-txt-c1ab0c0","message":"rc-message-5d21576d rc-c-txt__message-c1ab0c0","input":"rc-input-5d21576d rc-c-txt__input-c1ab0c0 rc-c-txt__input--select-c1ab0c0","is_focused":"rc-is_focused-5d21576d rc-is-focused-c1ab0c0","label":"rc-label-5d21576d rc-c-txt__label-c1ab0c0","hint":"rc-hint-5d21576d rc-c-txt__hint-c1ab0c0","size_small":"rc-size_small-5d21576d rc-c-txt--sm-c1ab0c0","success":"rc-success-5d21576d rc-has-success-c1ab0c0","warning":"rc-warning-5d21576d rc-has-warning-c1ab0c0","error":"rc-error-5d21576d rc-has-error-c1ab0c0","rtl":"rc-rtl-5d21576d rc-is-rtl-c1ab0c0","open":"rc-open-5d21576d rc-is-open-c1ab0c0","disabled":"rc-disabled-5d21576d rc-is-disabled-c1ab0c0"}
