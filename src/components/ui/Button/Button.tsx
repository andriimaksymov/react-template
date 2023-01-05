import { ComponentPropsWithRef, ElementType, forwardRef, ReactNode } from 'react';
import clsx from 'clsx';

import classes from './Button.module.sass';

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

export declare type PolymorphicRef<T extends ElementType> = ComponentPropsWithRef<T>['ref'];

const BaseButton = <T extends ElementType = 'button'>({
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
};

const Button = forwardRef(BaseButton) as typeof BaseButton;

export default Button;
