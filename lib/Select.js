import { Select as RmwcSelect } from 'rmwc/Select';
import withModifiers from './utils/withModifiers';

var Select = withModifiers('select')(RmwcSelect);

export { Select };