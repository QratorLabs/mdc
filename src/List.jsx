import {
  List as RmwcList,
  SimpleListItem as RmwcSimpleListItem,
  ListItem as RmwcListItem,
  ListItemGraphic,
  ListItemText,
  ListItemSecondaryText,
  ListItemMeta as RmwcListItemMeta,
  ListGroup,
  ListGroupSubheader,
  ListDivider
} from 'rmwc/List';
import withModifiers from './utils/withModifiers';

const List = withModifiers('list')(RmwcList);
const SimpleListItem = withModifiers('list')(RmwcSimpleListItem);
const ListItem = withModifiers('list-item')(RmwcListItem);
const ListItemMeta = withModifiers('list-item__meta')(RmwcListItemMeta);

export {
  List, SimpleListItem, ListItem,
  ListItemGraphic,
  ListItemText,
  ListItemSecondaryText,
  ListItemMeta,
  ListGroup,
  ListGroupSubheader,
  ListDivider
};
