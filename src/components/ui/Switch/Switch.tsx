import clsx from 'clsx';
import { ChangeEvent, forwardRef, ReactNode } from 'react';

import styles from './Switch.module.sass';

export type SwitchSize = 'small' | 'medium' | 'large';

export type SwitchLabelPlacement = 'top' | 'start' | 'bottom' | 'end';

export type SwitchProps = {
  className?: string;
  size?: SwitchSize;
  label?: ReactNode;
  checked?: boolean;
  labelPlacement?: SwitchLabelPlacement;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Switch = forwardRef<HTMLDivElement, SwitchProps>((
  {
    checked,
    className,
    label,
    labelPlacement = 'start',
    size,
    onChange,
    ...props
  },
  ref
) => {
  const labelPlacementClassName = 'labelPlacement' + labelPlacement.charAt(0).toUpperCase() + labelPlacement.slice(1);
  const classNames = clsx(
    styles.root,
    size && styles[size],
    className
  );

  console.log(checked);

  return (
    <div className={classNames} ref={ref} {...props}>
      <label className={clsx(styles.label, label && styles[labelPlacementClassName])}>
        <input
          type="checkbox"
          className={styles.input}
          checked={checked}
          onChange={onChange}
        />
        <span className={styles.switch} />
        <span className={styles.labelText}>{label}</span>
      </label>
    </div>
  );
});

export default Switch;
