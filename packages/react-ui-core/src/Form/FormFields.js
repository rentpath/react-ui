import validateField from './validateField'
import Field from './Field'
import FieldSet from './FieldSet'
import Textarea from './Textarea'
import Select from './Select'
import RadioGroup from './RadioGroup'
import RequiredField from './RequiredField'
import RangeSlider from './RangeSlider'
import {
  Name,
  Email,
  Password,
  Phone,
  Message,
  OptInNewsLetter,
  TermsOfService,
  Checkbox,
} from './SpecificFields'

export const ValidatedField = validateField(Field)
export const ValidatedFieldSet = validateField(FieldSet)
export const ValidatedTextarea = validateField(Textarea)
export const ValidatedSelect = validateField(Select)
export const ValidatedRadioGroup = validateField(RadioGroup)
export const ValidatedRequiredField = validateField(RequiredField)
export const ValidatedRangeSlider = validateField(RangeSlider)
export const ValidatedName = validateField(Name)
export const ValidatedEmail = validateField(Email)
export const ValidatedPassword = validateField(Password)
export const ValidatedPhone = validateField(Phone)
export const ValidatedMessage = validateField(Message)
export const ValidatedOptInNewsLetter = validateField(OptInNewsLetter)
export const ValidatedTermsOfService = validateField(TermsOfService)

export default {
  Field,
  FieldSet,
  Textarea,
  Select,
  RadioGroup,
  RequiredField,
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
  ValidatedRequiredField,
  ValidatedRangeSlider,
  ValidatedName,
  ValidatedEmail,
  ValidatedPassword,
  ValidatedPhone,
  ValidatedMessage,
  ValidatedOptInNewsLetter,
  ValidatedTermsOfService,
}
