"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Input = _interopRequireDefault(require("./Input"));

var _Select = _interopRequireDefault(require("./Select"));

var _Textarea = _interopRequireDefault(require("./Textarea"));

var _DatePicker = require("../DatePicker");

var _default = {
  text: _Input.default,
  select: _Select.default,
  textarea: _Textarea.default,
  datePicker: _DatePicker.DatePicker
};
exports.default = _default;