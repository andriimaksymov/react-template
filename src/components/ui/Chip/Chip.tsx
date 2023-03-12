import { UIEvent, ElementType, forwardRef, ReactNode } from 'react';
import clsx from 'clsx';

import IconButton from '../IconButton';
import { ReactComponent as CloseIcon } from './close.svg';

import styles from './Chip.module.sass';

export type ChipColor = 'primary' | 'secondary';

export type ChipVariant = 'outlined' | 'contained';

export type ChipProps = {
  round?: boolean;
  disabled?: boolean;
  className?: string;
  children?: ReactNode;
  variant?: ChipVariant;
  color?: ChipColor;
  deleteIcon?: ElementType;
  onDelete?: () => void;
  onClick?: () => void;
}

const Chip = forwardRef<HTMLDivElement, ChipProps>(({
                                                      className,
                                                      color,
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
    }

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
