import { Button as RmwcButton, ButtonIcon as RmwcButtonIcon } from 'rmwc/Button';
import withModifiers from './utils/withModifiers';

var Button = withModifiers('button')(RmwcButton);
var ButtonIcon = withModifiers('button__icon')(RmwcButtonIcon);

export { Button, ButtonIcon };