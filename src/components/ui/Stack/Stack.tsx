import clsx from 'clsx';
import { HTMLAttributes, ReactNode } from 'react';

import styles from './Stack.module.sass';

export type StackProps = {
  /**
   * Defines the align-items style property. It is applied for all screen sizes.
   */
  align?: 'start' | 'center' | 'end' | 'stretch';
  /**
   * Override or extend the style applied to the component.
   */
  className?: string;
  /**
   * The content of the component.
   */
  children?: ReactNode;
  /**
   * Defines the flex-direction style property. It is applied for all screen sizes.
   * @default 'row'
   */
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  /**
   * Defines the justify-content style property. It is applied for all screen sizes.
   */
  justify?: 'start' | 'center' | 'end' | 'between' | 'around';
  /**
   * Defines the space between immediate children.
   */
  spacing?: 1 | 2 | 3 | 4 | string;
  /**
   * Defines the flex-wrap style property. It's applied for all screen sizes.
   */
  wrap?: 'nowrap' | 'wrap-reverse' | 'wrap';
} & HTMLAttributes<HTMLDivElement>

const Stack = (
  {
    align,
    justify,
    direction = 'row',
    spacing,
    wrap = 'nowrap',
    className,
    children,
    ...props
  }: StackProps) => {

  const defaultStyle = {
    ...(typeof spacing === 'string' && {
      gridGap: spacing
    })
  };

  const classNames = clsx(styles.root, className, {
    [styles[wrap]]: wrap,
    [styles[direction]]: direction,
    [styles[`align-${align}`]]: align,
    [styles[`spacing${spacing}`]]: spacing && typeof spacing === 'number',
    [styles[`justify-${justify}`]]: justify,
  });

  return (
    <div
      className={classNames}
      {...props}
      style={{
        ...defaultStyle,
        ...props.style
      }}
    >
      {children}
    </div>
  );
};

export default Stack;
