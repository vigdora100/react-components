'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-forms.js')

appendStyles({
  css: ".rc-stretched-9562552f{-webkit-box-flex:1;-ms-flex:1;flex:1;width:100%}.rc-message-9562552f{margin-top:8px}.rc-input-9562552f{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.rc-hint-9562552f{margin-bottom:8px}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"stretched":"rc-stretched-9562552f","txt":"rc-txt-9562552f rc-c-txt-c18b0c0","message":"rc-message-9562552f rc-c-txt__message-c18b0c0","input":"rc-input-9562552f rc-c-txt__input-c18b0c0 rc-c-txt__input--select-c18b0c0","is_focused":"rc-is_focused-9562552f rc-is-focused-c18b0c0","label":"rc-label-9562552f rc-c-txt__label-c18b0c0","hint":"rc-hint-9562552f rc-c-txt__hint-c18b0c0","size_small":"rc-size_small-9562552f rc-c-txt--sm-c18b0c0","success":"rc-success-9562552f rc-has-success-c18b0c0","warning":"rc-warning-9562552f rc-has-warning-c18b0c0","error":"rc-error-9562552f rc-has-error-c18b0c0","rtl":"rc-rtl-9562552f rc-is-rtl-c18b0c0","open":"rc-open-9562552f rc-is-open-c18b0c0","disabled":"rc-disabled-9562552f rc-is-disabled-c18b0c0"}
