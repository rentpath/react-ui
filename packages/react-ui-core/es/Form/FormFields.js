import validateField from './validateField';
import Field from './Field';
import FieldSet from './FieldSet';
import Textarea from './Textarea';
import Select from './Select';
import RadioGroup from './RadioGroup';
import LabelHidingField from './LabelHidingField';
import RangeSlider from './RangeSlider';
import Name from './Name';
import Email from './Email';
import Password from './Password';
import Phone from './Phone';
import Message from './Message';
import OptInNewsLetter from './OptInNewsLetter';
import TermsOfService from './TermsOfService';
import Checkbox from './Checkbox';
export var ValidatedField = validateField(Field, 'Field');
export var ValidatedFieldSet = validateField(FieldSet, 'FieldSet');
export var ValidatedTextarea = validateField(Textarea, 'Textarea');
export var ValidatedSelect = validateField(Select, 'Select');
export var ValidatedRadioGroup = validateField(RadioGroup, 'RadioGroup');
export var ValidatedLabelHidingField = validateField(LabelHidingField, 'LabelHidingField');
export var ValidatedRangeSlider = validateField(RangeSlider, 'RangeSlider');
export var ValidatedName = validateField(Name, 'Name');
export var ValidatedEmail = validateField(Email, 'Email');
export var ValidatedPassword = validateField(Password, 'Password');
export var ValidatedPhone = validateField(Phone, 'Phone');
export var ValidatedMessage = validateField(Message, 'Message');
export var ValidatedOptInNewsLetter = validateField(OptInNewsLetter, 'OptInNewsLetter');
export var ValidatedTermsOfService = validateField(TermsOfService, 'TermsOfService');
export default {
  Field: Field,
  FieldSet: FieldSet,
  Textarea: Textarea,
  Select: Select,
  RadioGroup: RadioGroup,
  LabelHidingField: LabelHidingField,
  RangeSlider: RangeSlider,
  Name: Name,
  Email: Email,
  Password: Password,
  Phone: Phone,
  Message: Message,
  OptInNewsLetter: OptInNewsLetter,
  TermsOfService: TermsOfService,
  Checkbox: Checkbox,
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