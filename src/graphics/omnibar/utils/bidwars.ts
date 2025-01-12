import { Bids } from '@esa-layouts/types/schemas';
import clone from 'clone';

// eslint-disable-next-line import/prefer-default-export
export function getBid(bids: Bids, bidId: number): Bids[0] {
  const check = bids.find((x) => x.id === bidId);

  if (!check) {
    throw new Error(`Bid with id ${bidId} not found.`);
  }

  return clone(check);
}
