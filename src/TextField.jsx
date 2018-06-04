import {
  TextField as RmwcTextField,
  TextFieldIcon as RmwcTextFieldIcon,
  TextFieldHelperText as RmwcTextFieldHelperText
} from 'rmwc/TextField';
import withModifiers from './utils/withModifiers';

const TextField = withModifiers('text-field')(RmwcTextField);
const TextFieldIcon = withModifiers('mdc-text-field__icon')(RmwcTextFieldIcon);
const TextFieldHelperText = withModifiers('text-field-helper-text')(RmwcTextFieldHelperText);

export { TextField, TextFieldIcon, TextFieldHelperText };
