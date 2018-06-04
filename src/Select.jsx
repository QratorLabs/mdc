import { Select as RmwcSelect } from 'rmwc/Select';
import withModifiers from './utils/withModifiers';

const Select = withModifiers('select')(RmwcSelect);

export { Select };
