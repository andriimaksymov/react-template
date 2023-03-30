import clsx from 'clsx';
import { ElementType, forwardRef, ReactNode, UIEvent } from 'react';

import IconButton from '../IconButton';

import { ReactComponent as CloseIcon } from './assets/close.svg';

import styles from './Chip.module.sass';

export type ChipProps = {
  /**
   * Override or extend the style applied to the component.
   */
  className?: string;
  /**
   * The content render inside the chip.
   */
  children?: ReactNode;
  /**
   * The color of component.
   * @default 'default'
   */
  color?: 'default' | 'primary' | 'secondary';
  /**
   * Override the default delete icon element. Shown only if 'onDelete' is set.
   */
  deleteIcon?: ElementType;
  /**
   * If 'true' the component is disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * Callback fired when the delete icon is clicked.
   * If set, the delete icon will be shown.
   */
  onDelete?: () => void;
  /**
   * Callback fired when the chip is clicked.
   * If set, cursor will be 'pointer'.
   */
  onClick?: () => void;
  /**
   * If 'true' chip is rounded.
   * @default false
   */
  round?: boolean;
  /**
   * The variant to use.
   */
  variant?: 'outlined' | 'contained';
}

const Chip = forwardRef<HTMLDivElement, ChipProps>(
  ({
    className,
    color = 'default',
    deleteIcon,
    disabled,
    round,
    variant = 'contained',
    children,
    onDelete,
    onClick,
    ...props
  }, ref) => {

    const classNames = clsx(styles.root, className, color && [styles[color]], round && [styles.round], {
      [styles.disabled]: disabled,
      [styles[variant]]: variant,
      [styles.clickable]: onClick
    });

    const handleDelete = (e: UIEvent<HTMLSpanElement>) => {
      e.stopPropagation();
      onDelete?.();
    };

    return (
      <div ref={ref} className={classNames} {...(onClick && { onClick })} {...props}>
        <div className={styles.inner}>
          {children}
        </div>
        {onDelete && (
          <IconButton
            component="span"
            className={styles.button}
            icon={deleteIcon ?? CloseIcon}
            onClick={handleDelete}
          />
        )}
      </div>
    );
  }
);

export default Chip;
