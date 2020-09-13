"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ValidatedTermsOfService = exports.ValidatedOptInNewsLetter = exports.ValidatedMessage = exports.ValidatedPhone = exports.ValidatedPassword = exports.ValidatedEmail = exports.ValidatedName = exports.ValidatedRangeSlider = exports.ValidatedLabelHidingField = exports.ValidatedRadioGroup = exports.ValidatedSelect = exports.ValidatedTextarea = exports.ValidatedFieldSet = exports.ValidatedField = void 0;

var _validateField = _interopRequireDefault(require("./validateField"));

var _Field = _interopRequireDefault(require("./Field"));

var _FieldSet = _interopRequireDefault(require("./FieldSet"));

var _Textarea = _interopRequireDefault(require("./Textarea"));

var _Select = _interopRequireDefault(require("./Select"));

var _RadioGroup = _interopRequireDefault(require("./RadioGroup"));

var _LabelHidingField = _interopRequireDefault(require("./LabelHidingField"));

var _RangeSlider = _interopRequireDefault(require("./RangeSlider"));

var _Name = _interopRequireDefault(require("./Name"));

var _Email = _interopRequireDefault(require("./Email"));

var _Password = _interopRequireDefault(require("./Password"));

var _Phone = _interopRequireDefault(require("./Phone"));

var _Message = _interopRequireDefault(require("./Message"));

var _OptInNewsLetter = _interopRequireDefault(require("./OptInNewsLetter"));

var _TermsOfService = _interopRequireDefault(require("./TermsOfService"));

var _Checkbox = _interopRequireDefault(require("./Checkbox"));

var ValidatedField = (0, _validateField.default)(_Field.default, 'Field');
exports.ValidatedField = ValidatedField;
var ValidatedFieldSet = (0, _validateField.default)(_FieldSet.default, 'FieldSet');
exports.ValidatedFieldSet = ValidatedFieldSet;
var ValidatedTextarea = (0, _validateField.default)(_Textarea.default, 'Textarea');
exports.ValidatedTextarea = ValidatedTextarea;
var ValidatedSelect = (0, _validateField.default)(_Select.default, 'Select');
exports.ValidatedSelect = ValidatedSelect;
var ValidatedRadioGroup = (0, _validateField.default)(_RadioGroup.default, 'RadioGroup');
exports.ValidatedRadioGroup = ValidatedRadioGroup;
var ValidatedLabelHidingField = (0, _validateField.default)(_LabelHidingField.default, 'LabelHidingField');
exports.ValidatedLabelHidingField = ValidatedLabelHidingField;
var ValidatedRangeSlider = (0, _validateField.default)(_RangeSlider.default, 'RangeSlider');
exports.ValidatedRangeSlider = ValidatedRangeSlider;
var ValidatedName = (0, _validateField.default)(_Name.default, 'Name');
exports.ValidatedName = ValidatedName;
var ValidatedEmail = (0, _validateField.default)(_Email.default, 'Email');
exports.ValidatedEmail = ValidatedEmail;
var ValidatedPassword = (0, _validateField.default)(_Password.default, 'Password');
exports.ValidatedPassword = ValidatedPassword;
var ValidatedPhone = (0, _validateField.default)(_Phone.default, 'Phone');
exports.ValidatedPhone = ValidatedPhone;
var ValidatedMessage = (0, _validateField.default)(_Message.default, 'Message');
exports.ValidatedMessage = ValidatedMessage;
var ValidatedOptInNewsLetter = (0, _validateField.default)(_OptInNewsLetter.default, 'OptInNewsLetter');
exports.ValidatedOptInNewsLetter = ValidatedOptInNewsLetter;
var ValidatedTermsOfService = (0, _validateField.default)(_TermsOfService.default, 'TermsOfService');
exports.ValidatedTermsOfService = ValidatedTermsOfService;
var _default = {
  Field: _Field.default,
  FieldSet: _FieldSet.default,
  Textarea: _Textarea.default,
  Select: _Select.default,
  RadioGroup: _RadioGroup.default,
  LabelHidingField: _LabelHidingField.default,
  RangeSlider: _RangeSlider.default,
  Name: _Name.default,
  Email: _Email.default,
  Password: _Password.default,
  Phone: _Phone.default,
  Message: _Message.default,
  OptInNewsLetter: _OptInNewsLetter.default,
  TermsOfService: _TermsOfService.default,
  Checkbox: _Checkbox.default,
  ValidatedField: ValidatedField,
  ValidatedFieldSet: ValidatedFieldSet,
  ValidatedTextarea: ValidatedTextarea,
  ValidatedSelect: ValidatedSelect,
  ValidatedRadioGroup: ValidatedRadioGroup,
  ValidatedLabelHidingField: ValidatedLabelHidingField,
  ValidatedRangeSlider: ValidatedRangeSlider,
  ValidatedName: ValidatedName,
  ValidatedEmail: ValidatedEmail,
  ValidatedPassword: ValidatedPassword,
  ValidatedPhone: ValidatedPhone,
  ValidatedMessage: ValidatedMessage,
  ValidatedOptInNewsLetter: ValidatedOptInNewsLetter,
  ValidatedTermsOfService: ValidatedTermsOfService
};
exports.default = _default;