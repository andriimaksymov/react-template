import { ComponentPropsWithRef, ElementType, forwardRef } from 'react';
import clsx from 'clsx';

import { PolymorphicRef } from '../../../types/utils';

import styles from './IconButton.module.sass';

export type IconButtonSize = 'small' | 'medium' | 'large';

export type IconButtonColor = 'default' | 'inherit' | 'primary' | 'secondary';

export type IconButtonProps<T extends ElementType> = {
  /**
   * The component to use.
   */
  component?: T,
  /**
   * The color of the component.
   * @default 'default'
   */
  color?: IconButtonColor;
  /**
   * Override or extend the style applied to the component.
   */
  className?: string;
  /**
   * If 'true' the component is disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * The content of the component.
   */
  icon: ElementType;
  /**
   * Override or extend the style applied to the component icon.
   */
  iconClassName?: string;
  /**
   * If 'true' button will be rounded.
   * @default false
   */
  round?: boolean;
  /**
   * The size of the component.
   * @default 'medium'
   */
  size?: IconButtonSize;
}

const IconButtonBase = <T extends ElementType = 'button'>(
  {
    component,
    icon: Icon,
    round,
    color,
    className,
    iconClassName,
    disabled,
    size = 'medium',
    ...props
  }: IconButtonProps<T> & Omit<ComponentPropsWithRef<T>, keyof IconButtonProps<T>>,
  ref: PolymorphicRef<T>) => {
  const Component = component || 'button';

  const classNames = clsx(styles.root, className, color && [styles[color]], {
    [styles.disabled]: disabled,
    [styles.round]: round,
  });

  const iconClassNames = clsx(styles.icon, iconClassName, styles[size]);

  return (
    <Component ref={ref} {...props} className={classNames}>
      <Icon className={iconClassNames} />
    </Component>
  );
};

const IconButton = forwardRef(IconButtonBase) as typeof IconButtonBase;

export default IconButton;
