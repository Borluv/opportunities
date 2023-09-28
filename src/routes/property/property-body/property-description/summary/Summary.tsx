import type { FC } from 'react';
import SummaryItem from './summary-item/SummaryItem';
import type { SummaryItem as SummaryItemType } from '../../../../../assets/data';

interface SummaryPropTypes {
  summary: SummaryItemType[];
}

const Summary: FC<SummaryPropTypes> = ({ summary }) => (
  <ul>
    {summary.map((item) => (
      <SummaryItem key={`key-${item.id}`} item={item} />
    ))}
  </ul>
);

export default Summary;
