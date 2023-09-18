import type { FC } from 'react';
import SummaryItem from './summary-item/SummaryItem';

const summary = [
  {
    id: 1,
    key: 'County / City',
    value: 'Hillsborough County',
  },
  {
    id: 2,
    key: 'Asset Type',
    value: 'Supermarket',
  },
  {
    id: 3,
    key: 'Approved Use',
    value: 'Supermarket',
  },
  {
    id: 4,
    key: 'Rentable Square Footage',
    value: '63,370 sqft',
  },
  {
    id: 5,
    key: 'Lot Size',
    value: '7.02 Acres',
    alternative: '305,791 sqft',
  },
  {
    id: 6,
    key: 'Household income',
    value: '$68,700',
  },
  {
    id: 7,
    key: 'Annual Average Daily Trafic',
    value: '52,000',
  },
];

const Summary: FC = () => (
  <ul>
    {summary.map((item) => (
      <SummaryItem key={`key-${item.id}`} item={item} />
    ))}
  </ul>
);

export default Summary;
