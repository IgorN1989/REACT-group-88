import { formatDistanceToNow } from 'date-fns';

export const getFormateDateDistanceToNow = date =>
  formatDistanceToNow(new Date(date), { addSuffix: true });
