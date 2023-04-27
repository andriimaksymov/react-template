import clsx from 'clsx';
import { ComponentPropsWithoutRef, forwardRef, ReactNode } from 'react';

import styles from './Input.module.sass';

export type InputProps = {
  /**
   * Override or extend the style applied to the input.
   */
  controlClassName?: string;
  /**
   * Override or extend the style applied to the input wrapper.
   */
  className?: string;
  /**
   * End input adornment for this component.
   */
  endAdornment?: ReactNode;
  /**
   * If true the component will have error styles.
   * @default false
   */
  hasError?: boolean;
  /**
   * Start input adornment for this component.
   */
  startAdornment?: ReactNode;
  /**
   * The variant to use.
   * @default 'contained'
   */
  variant?: 'contained' | 'outlined' | 'underline';
} & ComponentPropsWithoutRef<'input'>;

const Input = forwardRef<HTMLInputElement, InputProps>((
  {
    className,
    controlClassName,
    endAdornment,
    hasError,
    startAdornment,
    variant = 'contained',
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
          [styles.disabled]: props.disabled,
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
