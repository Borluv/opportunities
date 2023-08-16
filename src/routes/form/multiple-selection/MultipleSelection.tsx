import { FC, ReactElement } from 'react';

interface MultipleSelectionPropTypes {
  legend: string;
  children: ReactElement[];
}

const MultipleSelection: FC<MultipleSelectionPropTypes> = ({ legend, children }) => (
  <div>
    <span>{legend}</span>
    <ul>{children}</ul>
  </div>
);

export default MultipleSelection;
