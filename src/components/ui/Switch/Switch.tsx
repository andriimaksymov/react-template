import clsx from 'clsx';
import { forwardRef, ReactNode } from 'react';

import styles from './Switch.module.sass';

export type SwitchSize = 'small' | 'medium' | 'large';

export type SwitchLabelPlacement = 'top' | 'start' | 'bottom' | 'end';

export type SwitchProps = {
  className?: string,
  size?: SwitchSize,
  label?: ReactNode,
  labelPlacement?: SwitchLabelPlacement,
}

const Switch = forwardRef<HTMLDivElement, SwitchProps>((
  {
    className,
    label,
    labelPlacement = 'start',
    size,
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

  return (
    <div className={classNames} ref={ref} {...props}>
      <label className={clsx(styles.label, label && styles[labelPlacementClassName])}>
        <input type="checkbox" className={styles.input} />
        <span className={styles.labelText}>{label}</span>
        <span className={styles.switch} />
      </label>
    </div>
  );
});

export default Switch;
