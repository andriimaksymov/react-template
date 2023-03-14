import { ReactNode } from 'react';
import clsx from 'clsx';

import styles from './Badge.module.sass';

export type BadgeProps = {
  badgeContent?: ReactNode;
  className?: string;
  children?: ReactNode;
  variant?: 'dot' | 'standard';
  invisible?: boolean;
}
const Badge = (
  {
    badgeContent,
    className,
    children,
    invisible,
    variant = 'standard',
    ...props
  }: BadgeProps) => {
  const classNames = clsx(styles.root, className, {
    [styles.invisible]: invisible
  });
  return (
    <div className={classNames} {...props}>
      {children}
      <span className={clsx(styles.content, styles[variant])}>
        {variant !== 'dot' && badgeContent}
      </span>
    </div>
  );
};

export default Badge;