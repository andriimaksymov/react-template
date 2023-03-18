import { ComponentPropsWithRef, ElementType, forwardRef, ReactNode } from 'react';
import clsx from 'clsx';

import { PolymorphicRef } from '../../../types/utils';

import styles from './Button.module.sass';

export type ButtonSize = 'small' | 'medium' | 'large';

export type ButtonVariant = 'contained' | 'outlined' | 'text';

export type ButtonColor = 'default' | 'primary' | 'secondary';

export type ButtonProps<T extends ElementType> = {
  /**
   * The content of the component
   */
  children?: ReactNode;
  /**
   * Override or extend the style applied to the component
   */
  className?: string;
  /**
   * The color of the component
   * @default 'default'
   */
  color?: ButtonColor;
  /**
   * The component that will be used
   */
  component?: T;
  /**
   * If 'true' the component is disabled
   * @default false
   */
  disabled?: boolean;
  /**
   * The icon that will be placed after content
   */
  endIcon?: ElementType;
  /**
   * The component will be stretched by all content
   * @default false
   */
  fullWidth?: boolean;
  /**
   * The size of the component
   * @default 'medium'
   */
  size?: ButtonSize;
  /**
   * The icon that will be placed before content
   */
  startIcon?: ElementType;
  /**
   * The variant of the component
   * @default 'contained'
   */
  variant?: ButtonVariant;
}

const ButtonBase = <T extends ElementType = 'button'>(
  {
    children,
    className,
    component,
    color = 'default',
    disabled,
    endIcon: EndIcon,
    size = 'medium',
    startIcon: StartIcon,
    variant = 'contained',
    fullWidth,
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

export default Button;
