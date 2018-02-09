'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-forms.js')

appendStyles({
  css: ".rc-stretched-78ca536b{-webkit-box-flex:1;-ms-flex:1;flex:1;width:100%}.rc-message-78ca536b{margin-top:8px}.rc-input-78ca536b{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.rc-hint-78ca536b{margin-bottom:8px}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"stretched":"rc-stretched-78ca536b","txt":"rc-txt-78ca536b rc-c-txt-27923a54","message":"rc-message-78ca536b rc-c-txt__message-27923a54","input":"rc-input-78ca536b rc-c-txt__input-27923a54 rc-c-txt__input--select-27923a54","is_focused":"rc-is_focused-78ca536b rc-is-focused-27923a54","label":"rc-label-78ca536b rc-c-txt__label-27923a54","hint":"rc-hint-78ca536b rc-c-txt__hint-27923a54","size_small":"rc-size_small-78ca536b rc-c-txt--sm-27923a54","success":"rc-success-78ca536b rc-has-success-27923a54","warning":"rc-warning-78ca536b rc-has-warning-27923a54","error":"rc-error-78ca536b rc-has-error-27923a54","rtl":"rc-rtl-78ca536b rc-is-rtl-27923a54","open":"rc-open-78ca536b rc-is-open-27923a54","disabled":"rc-disabled-78ca536b rc-is-disabled-27923a54"}
