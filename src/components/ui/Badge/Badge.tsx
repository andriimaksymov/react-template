import { ReactNode } from 'react';
import clsx from 'clsx';

import styles from './Badge.module.sass';

export interface BadgeOrigin {
  vertical: 'top' | 'bottom';
  horizontal: 'left' | 'right';
}

export type BadgeProps = {
  badgeContent?: ReactNode;
  className?: string;
  children?: ReactNode;
  color?: 'primary' | 'secondary' | 'default' | 'error' | 'info' | 'success' | 'warning';
  variant?: 'dot' | 'standard';
  invisible?: boolean;
}
const Badge = (
  {
    badgeContent,
    className,
    children,
    color = 'default',
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
      <span className={clsx(styles.content, styles[`${color}Color`], styles[variant])}>
        {variant !== 'dot' && badgeContent}
      </span>
    </div>
  );
};

export default Badge;