import { ComponentPropsWithRef, ElementType, forwardRef, ReactNode } from 'react';
import clsx from 'clsx';

import classes from './Button.module.sass';

export type ButtonSize = 'small' | 'medium' | 'large';

export type ButtonVariant = 'contained' | 'outlined' | 'text';

export type ButtonColor = 'default' | 'primary' | 'secondary';

export interface ButtonProps extends ComponentPropsWithRef<'button'> {
  fullWidth?: boolean;
  disabled?: boolean;
  className?: string;
  component?: ElementType;
  startIcon?: ElementType;
  endIcon?: ElementType;
  children?: ReactNode;
  size?: ButtonSize;
  variant?: ButtonVariant;
  color?: ButtonColor;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      component: Component = 'button',
      startIcon: StartIcon,
      endIcon:  EndIcon,
      size = 'medium',
      color = 'inherit',
      variant = 'text',
      className,
      fullWidth,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const classNames = clsx(classes.root, className, {
      [classes[color]]: color,
      [classes.disabled]: disabled,
      [classes.fullWidth]: fullWidth,
      [classes[size]]: size,
      [classes[variant]]: variant,
    });

    return (
      <Component ref={ref} className={classNames} disabled={disabled} {...props}>
        {StartIcon && (
          <span className={clsx(classes.icon, classes.iconStart)}>
              <StartIcon />
          </span>
        )}
        <span className={classes.inner}>{children}</span>
        {EndIcon && (
          <span className={clsx(classes.icon, classes.iconEnd)}>
              <EndIcon />
          </span>
        )}
      </Component>
    );
  }
);

export default Button;
