import { FormField as RmwcFormField } from 'rmwc/FormField';
import withModifiers from './utils/withModifiers';

const FormField = withModifiers('form-field')(RmwcFormField);

export { FormField };
