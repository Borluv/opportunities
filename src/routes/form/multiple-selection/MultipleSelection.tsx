import type { FC, ReactElement } from 'react';

interface MultipleSelectionPropTypes {
  legend: string;
  children: ReactElement[];
}

const MultipleSelection: FC<MultipleSelectionPropTypes> = ({ legend, children }) => (
  <>
    <span>{legend}</span>
    <div>
      <ul>{children}</ul>
    </div>
  </>
);

export default MultipleSelection;
