import clsx from 'clsx';
import { ComponentPropsWithoutRef, forwardRef, ReactNode } from 'react';

import styles from './Input.module.sass';

export type InputProps = {
  className?: string;
  hasError?: boolean;
  loading?: boolean;
  variant?: 'contained' | 'outlined' | 'underline';
  controlClassName?: string;
  endAdornment?: ReactNode;
  startAdornment?: ReactNode;
} & ComponentPropsWithoutRef<'input'>;

const Input = forwardRef<HTMLInputElement, InputProps>((
  {
    className,
    disabled,
    hasError,
    variant = 'contained',
    controlClassName,
    endAdornment,
    startAdornment,
    ...props
  },
  ref
) => {
  return (
    <div
      className={clsx(styles.root,
        {
          [styles.startAdornment]: startAdornment,
          [styles.endAdornment]: endAdornment,
          [styles.disabled]: disabled,
          [styles.hasError]: hasError,
          [styles[variant]]: !!variant
        },
        className,
      )}
    >
      {startAdornment && (
        <div className={styles.adornment}>
          {startAdornment}
        </div>
      )}
      <input
        ref={ref}
        className={clsx(styles.control, controlClassName)}
        disabled={disabled}
        {...props}
      />
      {endAdornment && (
        <div className={styles.adornment}>
          {endAdornment}
        </div>
      )}
    </div>
  );
});

export default Input;
