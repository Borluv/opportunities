import type { FC, ReactElement } from 'react';
import styles from './SingleSelectionOption.module.scss';

interface SingleSelectionOptionPropTypes {
  option: string;
  value: string;
  label: string;
  icon?: ReactElement;
  handleChange: (value: string) => void;
  handlePage: () => void;
}

const SingleSelectionOption: FC<SingleSelectionOptionPropTypes> = ({
  option,
  value,
  label,
  icon,
  handleChange,
  handlePage,
}) => {
  const selected = option === value;

  const changeValue = (): void => {
    handleChange(option);
    setTimeout(handlePage, 250);
  };

  return (
    <button type="button" onClick={changeValue} className={styles.button} disabled={selected}>
      {icon}
      {label}
    </button>
  );
};

export default SingleSelectionOption;
