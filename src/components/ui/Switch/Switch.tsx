import clsx from 'clsx';
import { forwardRef } from 'react';

import styles from './Switch.module.sass';

export type SwitchSize = 'small' | 'medium' | 'large';

export type SwitchProps = {
  className?: string,
  size?: SwitchSize,
}

const Switch = forwardRef<HTMLDivElement, SwitchProps>((
  { className, size, ...props },
  ref
) => {
  const classNames = clsx(styles.root, className, size && [styles[size]]);

  return (
    <div className={classNames} ref={ref} {...props}>
      <label className={styles.label}>
        <input type="checkbox" className={styles.input} />
        <span className={styles.switch} />
      </label>
    </div>
  );
});

export default Switch;
