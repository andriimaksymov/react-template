import clsx from 'clsx';
import { ComponentPropsWithRef, ElementType, forwardRef } from 'react';

import { PolymorphicRef } from '../../../types/utils';

import styles from './IconButton.module.sass';

export type IconButtonProps<T extends ElementType> = {
  /**
   * The component to use.
   */
  component?: T,
  /**
   * The color of the component.
   * @default 'inherit'
   */
  color?: 'inherit' | 'primary' | 'secondary';
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
  size?: 'small' | 'medium' | 'large';
}

/**
 * A button with an icon.
 * @template T The type of element to use as the component.
 * @param {IconButtonProps<T>} props The props for the IconButton.
 * @param {PolymorphicRef<T>} ref The ref for the IconButton.
 * @returns {JSX.Element} The IconButton component.
 */

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
    ...rest
  }: IconButtonProps<T> & Omit<ComponentPropsWithRef<T>, keyof IconButtonProps<T>>,
  ref: PolymorphicRef<T>) => {
  const Component = component || 'button';

  const classNames = clsx(
    styles.root,
    className,
    color && styles[color],
    disabled && styles.disabled,
    round && styles.round,
  );

  const iconClassNames = clsx(
    styles.icon,
    iconClassName,
    styles[size]
  );

  return (
    <Component ref={ref} {...rest} className={classNames}>
      <Icon className={iconClassNames} />
    </Component>
  );
};

const IconButton = forwardRef(IconButtonBase) as typeof IconButtonBase;

export default IconButton;
