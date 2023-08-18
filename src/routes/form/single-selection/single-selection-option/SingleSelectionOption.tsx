import type { FC, ReactElement } from 'react';
import styles from './SingleSelectionOption.module.scss';

interface SingleSelectionOptionPropTypes {
  option: string;
  value: string;
  label: string;
  icon?: ReactElement;
  handleChange: (value: string) => void;
}

const SingleSelectionOption: FC<SingleSelectionOptionPropTypes> = ({ option, value, label, icon, handleChange }) => {
  const selected = option === value;

  const changeValue = (): void => handleChange(option);

  return (
    <button type="button" onClick={changeValue} className={styles.button} disabled={selected}>
      {icon}
      {label}
    </button>
  );
};

export default SingleSelectionOption;
