import clsx from 'clsx';
import { ComponentPropsWithRef, ElementType, forwardRef, ReactNode } from 'react';

import { PolymorphicRef } from '../../../types/utils';

import { ButtonProps } from '../Button';

import styles from './MenuItem.module.sass';

export type MenuItemProps<T extends ElementType> = {
  /**
   * The content of the component.
   */
  children?: ReactNode;
  /**
   * Override or extend the style applied to the component.
   */
  className?: string;
  /**
   * The component to use.
   */
  component?: T;
  /**
   * If 'true' the component has active styles.
   * @default false
   */
  isActive?: boolean;
}

const MenuItemBase = <T extends ElementType = 'div'>(
  {
    children,
    component,
    className,
    isActive,
    ...props
  }: MenuItemProps<T> & Omit<ComponentPropsWithRef<T>, keyof ButtonProps<T>>,
  ref: PolymorphicRef<T>
) => {

  const Component = component || 'div';

  const classNames = clsx(
    styles.root,
    {
      [styles.active]: isActive,
      [styles.cursorPointer]: props.onClick,
    },
    className,
  );

  return (
    <Component ref={ref} className={classNames} {...props}>
      {children}
    </Component>
  );
};

const MenuItem = forwardRef(MenuItemBase) as typeof MenuItemBase;

export default MenuItem;