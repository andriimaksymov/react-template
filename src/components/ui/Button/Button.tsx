import { ComponentPropsWithRef, ElementType, forwardRef, ReactNode } from 'react';
import clsx from 'clsx';

import { PolymorphicRef } from '../../../types/utils';

import styles from './Button.module.sass';

export type ButtonProps<T extends ElementType> = {
  /**
   * The content of the component.
   */
  children?: ReactNode;
  /**
   * Override or extend the style applied to the component.
   */
  className?: string;
  /**
   * The color of the component.
   * @default 'inherit'
   */
  color?: 'inherit' | 'primary' | 'secondary';
  /**
   * The component to use.
   */
  component?: T;
  /**
   * If 'true' the component is disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * The icon that will be placed after content.
   */
  endIcon?: ElementType;
  /**
   * The component will be stretched by all content.
   * @default false
   */
  fullWidth?: boolean;
  /**
   * The size of the component.
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * The icon that will be placed before content.
   */
  startIcon?: ElementType;
  /**
   * The variant of the component.
   * @default 'contained'
   */
  variant?: 'contained' | 'outlined' | 'text';
}

/**
 * Base Button component.
 * @template T The type of element to use as the component.
 * @param {ButtonProps<T> & Omit<ComponentPropsWithRef<T>, keyof ButtonProps<T>>} props The props for the Button.
 * @param {PolymorphicRef<T>} ref The ref for the Button.
 * @returns {JSX.Element} The Button component.
 */

const ButtonBase = <T extends ElementType = 'button'>(
  {
    children,
    className,
    component,
    color = 'inherit',
    disabled,
    endIcon: EndIcon,
    size = 'medium',
    startIcon: StartIcon,
    variant = 'contained',
    fullWidth,
    ...rest
  }: ButtonProps<T> & Omit<ComponentPropsWithRef<T>, keyof ButtonProps<T>>,
  ref: PolymorphicRef<T>) => {
  const Component = component || 'button';

  const classNames = clsx(
    styles.root,
    className,
    styles[color],
    styles[size],
    styles[variant],
    {
      [styles.disabled]: disabled,
      [styles.fullWidth]: fullWidth,
    }
  );

  return (
    <Component ref={ref} className={classNames} disabled={disabled} {...rest}>
      {StartIcon && (
        <span className={clsx(styles.iconWrap, styles.iconStart)}>
          <StartIcon className={styles.icon} />
        </span>
      )}
      {children}
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
