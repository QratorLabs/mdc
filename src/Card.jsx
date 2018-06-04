import {
  Card as RmwcCard ,
  CardPrimaryAction as RmwcCardPrimaryAction ,
  CardMedia as RmwcCardMedia ,
  CardAction as RmwcCardAction ,
  CardActions as RmwcCardActions ,
  CardActionButtons as RmwcCardActionButtons ,
  CardActionIcons as RmwcCardActionIcons 
} from 'rmwc/Card';
import withModifiers from './utils/withModifiers';

const Card = withModifiers('card')(RmwcCard)
const CardPrimaryAction = withModifiers('card__primary-action')(RmwcCardPrimaryAction)
const CardMedia = withModifiers('card__media')(RmwcCardMedia)
const CardAction = withModifiers('card__action')(RmwcCardAction)
const CardActions = withModifiers('card__actions')(RmwcCardActions)
const CardActionButtons = withModifiers('card__action-buttons')(RmwcCardActionButtons)
const CardActionIcons = withModifiers('card__action-icon')(RmwcCardActionIcons)

export { Card, CardPrimaryAction, CardMedia, CardAction, CardActions, CardActionButtons, CardActionIcons };
