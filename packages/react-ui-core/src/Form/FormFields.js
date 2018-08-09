import validateField from './validateField'
import Field from './Field'
import FieldSet from './FieldSet'
import Textarea from './Textarea'
import Select from './Select'
import RadioGroup from './RadioGroup'
import LabelHidingField from './LabelHidingField'
import RangeSlider from './RangeSlider'
import Name from './Name'
import Email from './Email'
import Password from './Password'
import Phone from './Phone'
import Message from './Message'
import OptInNewsLetter from './OptInNewsLetter'
import TermsOfService from './TermsOfService'
import Checkbox from './Checkbox'

export const ValidatedField = validateField(Field, 'Field')
export const ValidatedFieldSet = validateField(FieldSet, 'FieldSet')
export const ValidatedTextarea = validateField(Textarea, 'Textarea')
export const ValidatedSelect = validateField(Select, 'Select')
export const ValidatedRadioGroup = validateField(RadioGroup, 'RadioGroup')
export const ValidatedLabelHidingField = validateField(LabelHidingField, 'LabelHidingField')
export const ValidatedRangeSlider = validateField(RangeSlider, 'RangeSlider')
export const ValidatedName = validateField(Name, 'Name')
export const ValidatedEmail = validateField(Email, 'Email')
export const ValidatedPassword = validateField(Password, 'Password')
export const ValidatedPhone = validateField(Phone, 'Phone')
export const ValidatedMessage = validateField(Message, 'Message')
export const ValidatedOptInNewsLetter = validateField(OptInNewsLetter, 'OptInNewsLetter')
export const ValidatedTermsOfService = validateField(TermsOfService, 'TermsOfService')

export default {
  Field,
  FieldSet,
  Textarea,
  Select,
  RadioGroup,
  LabelHidingField,
  RangeSlider,
  Name,
  Email,
  Password,
  Phone,
  Message,
  OptInNewsLetter,
  TermsOfService,
  Checkbox,
  ValidatedField,
  ValidatedFieldSet,
  ValidatedTextarea,
  ValidatedSelect,
  ValidatedRadioGroup,
  ValidatedLabelHidingField,
  ValidatedRangeSlider,
  ValidatedName,
  ValidatedEmail,
  ValidatedPassword,
  ValidatedPhone,
  ValidatedMessage,
  ValidatedOptInNewsLetter,
  ValidatedTermsOfService,
}
