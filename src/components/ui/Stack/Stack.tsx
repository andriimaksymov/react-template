import { FC, HTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

import styles from './Stack.module.sass';

export type StackDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';

export type StackSpacing = 1 | 2 | 3 | 4 | string;

export type StackAlign = 'start' | 'center' | 'end' | 'stretch';

export type StackJustify = 'start' | 'center' | 'end' | 'between' | 'around';

export type StackProps = {
  grow?: boolean;
  shrink?: boolean;
  wrap?: boolean;
  classNames?: string;
  children?: ReactNode;
  spacing?: StackSpacing;
  direction?: StackDirection;
  align?: StackAlign;
  justify?: StackJustify;
} & HTMLAttributes<HTMLDivElement>

const Stack: FC<StackProps> = (
  {
    align,
    justify,
    direction = 'row',
    spacing,
    grow,
    shrink,
    wrap,
    classNames,
    children,
    ...props
  }) => {
  const defaultStyle = {
    ...(typeof spacing === 'string' && {
      gridGap: spacing
    })
  };

  const className = clsx(styles.root, classNames, {
    [styles.wrap]: wrap,
    [styles.grow]: grow,
    [styles.shrink]: shrink,
    [styles[direction]]: direction,
    [styles[`align-${align}`]]: align,
    [styles[`spacing${spacing}`]]: spacing && typeof spacing === 'number',
    [styles[`justify-${justify}`]]: justify,
  });

  return (
    <div className={className} style={defaultStyle} {...props}>
      {children}
    </div>
  );
};

export default Stack;
