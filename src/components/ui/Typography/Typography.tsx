import clsx from 'clsx';
import { ComponentPropsWithRef, ElementType, forwardRef, ReactNode } from 'react';

import { PolymorphicRef } from '../../../types/utils';

import styles from './Typography.module.sass';

export type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2';

export type TypographyWeight = 'normal' | 'medium' | 'semiBold' | 'bold';

/**
 * Props for Typography component.
 * @template T - The type of element to render.
 */
export type TypographyProps<T extends ElementType> = {
  /**
   * The content of the component.
   */
  children?: ReactNode;
  /**
   * Override or extend the styles applied to the component.
   */
  className?: string;
  /**
   * The component to use.
   */
  component?: T;
  /**
   * The variant of typography.
   * @default 'body1'
   */
  variant?: TypographyVariant;
  /**
   * Available weights for component.
   */
  weight?: TypographyWeight,
}

/**
 * Base Typography component.
 * @template T - The type of element to render.
 * @param {TypographyProps<T>} props - The props for the Typography component.
 * @param {PolymorphicRef<T>} ref - The ref object for the component.
 * @returns {JSX.Element} - The rendered Typography component.
 */

const TypographyBase = <T extends ElementType>(
  {
    component,
    children,
    className,
    variant = 'body1',
    weight,
    ...rest
  }: TypographyProps<T> & Omit<ComponentPropsWithRef<T>, keyof TypographyProps<T>>, ref: PolymorphicRef<T>): JSX.Element => {

  const Component = component || 'span';

  const classNames = clsx(styles.root, className, variant && [styles[variant]], weight && [styles[weight]]);

  return (
    <Component ref={ref} className={classNames} {...rest}>
      {children}
    </Component>
  );

};

const Typography = forwardRef(TypographyBase) as typeof TypographyBase;

export default Typography;
