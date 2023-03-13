import clsx from 'clsx';
import { ComponentPropsWithRef, ElementType, forwardRef, ReactNode } from 'react';

import { PolymorphicRef } from '../../../types/utils';

import styles from './Typography.module.sass';

export type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2';

export type TypographyWeight = 'normal' | 'medium' | 'semiBold' | 'bold';

export type TypographyProps<T extends ElementType> = {
  component?: T,
  children?: ReactNode,
  className?: string,
  variant?: TypographyVariant,
  weight?: TypographyWeight,
}

const TypographyBase = <T extends ElementType>({
                                                 component,
                                                 children,
                                                 className,
                                                 variant = 'body1',
                                                 weight,
                                                 ...props
                                               }: TypographyProps<T> & Omit<ComponentPropsWithRef<T>, keyof TypographyProps<T>>, ref: PolymorphicRef<T>) => {
  const Component = component || 'span';

  const classNames = clsx(styles.root, className, variant && [styles[variant]], weight && [styles[weight]]);

  return (
    <Component ref={ref} className={classNames} {...props}>
      {children}
    </Component>
  );

};

const Typography = forwardRef(TypographyBase) as typeof TypographyBase;

export default Typography;
