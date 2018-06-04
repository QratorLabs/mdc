import { Button as RmwcButton, ButtonIcon as RmwcButtonIcon } from 'rmwc/Button';
import withModifiers from './utils/withModifiers';

const Button = withModifiers('button')(RmwcButton);
const ButtonIcon = withModifiers('button__icon')(RmwcButtonIcon);

export { Button, ButtonIcon };
