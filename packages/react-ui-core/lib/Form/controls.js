'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Input = require('./Input');

var _Input2 = _interopRequireDefault(_Input);

var _Select = require('./Select');

var _Select2 = _interopRequireDefault(_Select);

var _Textarea = require('./Textarea');

var _Textarea2 = _interopRequireDefault(_Textarea);

var _DateInput = require('../DateInput');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  text: _Input2.default,
  select: _Select2.default,
  textarea: _Textarea2.default,
  datePicker: _DateInput.DateInput
};