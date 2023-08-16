import type { FC, ReactElement } from 'react';

interface SingleSelection {
  legend: string;
  children: ReactElement[];
}

const SingleSelection: FC<SingleSelection> = ({ legend, children }) => (
  <div>
    <span>{legend}</span>
    {children}
  </div>
);

export default SingleSelection;
