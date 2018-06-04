import { Card as RmwcCard, CardPrimaryAction as RmwcCardPrimaryAction, CardMedia as RmwcCardMedia, CardAction as RmwcCardAction, CardActions as RmwcCardActions, CardActionButtons as RmwcCardActionButtons, CardActionIcons as RmwcCardActionIcons } from 'rmwc/Card';
import withModifiers from './utils/withModifiers';

var Card = withModifiers('card')(RmwcCard);
var CardPrimaryAction = withModifiers('card__primary-action')(RmwcCardPrimaryAction);
var CardMedia = withModifiers('card__media')(RmwcCardMedia);
var CardAction = withModifiers('card__action')(RmwcCardAction);
var CardActions = withModifiers('card__actions')(RmwcCardActions);
var CardActionButtons = withModifiers('card__action-buttons')(RmwcCardActionButtons);
var CardActionIcons = withModifiers('card__action-icon')(RmwcCardActionIcons);

export { Card, CardPrimaryAction, CardMedia, CardAction, CardActions, CardActionButtons, CardActionIcons };