import { ComponentPropsWithRef, ElementType, forwardRef, ReactNode } from 'react';
import clsx from 'clsx';

import { PolymorphicRef } from '../../../types/utils';

import styles from './Button.module.sass';

export type ButtonSize = 'small' | 'medium' | 'large';

export type ButtonVariant = 'contained' | 'outlined' | 'text';

export type ButtonColor = 'default' | 'primary' | 'secondary';

export type ButtonProps<T extends ElementType> = {
  fullWidth?: boolean;
  disabled?: boolean;
  className?: string;
  children?: ReactNode;
  endIcon?: ElementType;
  startIcon?: ElementType;
  color?: ButtonColor;
  component?: T;
  size?: ButtonSize;
  variant?: ButtonVariant;
}

const ButtonBase = <T extends ElementType = 'button'>({
                                                               component,
                                                               startIcon: StartIcon,
                                                               endIcon: EndIcon,
                                                               size = 'medium',
                                                               color = 'default',
                                                               variant = 'text',
                                                               className,
                                                               fullWidth,
                                                               disabled,
                                                               children,
                                                               ...props
                                                             }: ButtonProps<T> & Omit<ComponentPropsWithRef<T>, keyof ButtonProps<T>>,
                                                             ref: PolymorphicRef<T>) => {
  const Component = component || 'button';

  const classNames = clsx(styles.root, className, {
    [styles[color]]: color,
    [styles.disabled]: disabled,
    [styles.fullWidth]: fullWidth,
    [styles[size]]: size,
    [styles[variant]]: variant,
  });

  return (
    <Component ref={ref} className={classNames} disabled={disabled} {...props}>
      {StartIcon && (
        <span className={clsx(styles.iconWrap, styles.iconStart)}>
          <StartIcon className={styles.icon} />
        </span>
      )}
      <span className={styles.inner}>{children}</span>
      {EndIcon && (
        <span className={clsx(styles.iconWrap, styles.iconEnd)}>
          <EndIcon className={styles.icon} />
        </span>
      )}
    </Component>
  );
};

const Button = forwardRef(ButtonBase) as typeof ButtonBase;

export default Button as typeof ButtonBase;
