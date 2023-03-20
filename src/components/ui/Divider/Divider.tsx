import clsx from 'clsx';
import { HTMLAttributes } from 'react';

import styles from './Divider.module.sass';

export type DividerProps = {
  /**
   * Override or extend styles applied to the component
   */
  className?: string;
  /**
   * The component orientation.
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';
} & HTMLAttributes<'div'>

const Divider = (
  {
    className,
    orientation = 'horizontal',
  }: DividerProps
) => {

  const classNames = clsx(styles.root, styles[orientation], className);

  return (
    <div className={classNames} />
  );
};

export default Divider;