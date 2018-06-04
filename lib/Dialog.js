import { Dialog as RmwcDialog, DefaultDialogTemplate, DialogSurface, DialogHeader, DialogHeaderTitle, DialogBody, DialogFooter, DialogFooterButton as RmwcDialogFooterButton, DialogBackdrop, SimpleDialog } from 'rmwc/Dialog';
import withModifiers from './utils/withModifiers';

var Dialog = withModifiers('dialog')(RmwcDialog);
var DialogFooterButton = withModifiers('button')(RmwcDialogFooterButton);

export { Dialog, DefaultDialogTemplate, DialogSurface, DialogHeader, DialogHeaderTitle, DialogBody, DialogFooter, DialogFooterButton, DialogBackdrop, SimpleDialog };