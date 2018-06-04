import { TextField as RmwcTextField, TextFieldIcon as RmwcTextFieldIcon, TextFieldHelperText as RmwcTextFieldHelperText } from 'rmwc/TextField';
import withModifiers from './utils/withModifiers';

var TextField = withModifiers('text-field')(RmwcTextField);
var TextFieldIcon = withModifiers('mdc-text-field__icon')(RmwcTextFieldIcon);
var TextFieldHelperText = withModifiers('text-field-helper-text')(RmwcTextFieldHelperText);

export { TextField, TextFieldIcon, TextFieldHelperText };