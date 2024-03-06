import { ReactNode } from 'react';
import clsx from 'clsx';

import styles from './Badge.module.sass';

export interface BadgeOrigin {
  vertical: 'top' | 'bottom';
  horizontal: 'left' | 'right';
}

export type BadgeProps = {
  /**
   * The anchor of the badge.
   * @default {
   *   vertical: 'top',
   *   horizontal: 'right',
   * }
   */
  anchorOrigin?: BadgeOrigin;
  /**
   * The content to be displayed within the badge.
   */
  badgeContent?: ReactNode;
  /**
   * Override or extend the styles applied to the component.
   */
  className?: string;
  /**
   * The badge will be added relative to this node.
   */
  children?: ReactNode;
  /**
   * The color of component.
   * @default 'default'
   */
  color?: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  /**
   * The state of badge visibility.
   * If 'true' the badge is invisible.
   * @default false
   */
  invisible?: boolean;
  /**
   * The variant to use.
   * @default 'standard'
   */
  variant?: 'dot' | 'standard';
}

const Badge = (
  {
    anchorOrigin = {
      vertical: 'top',
      horizontal: 'right'
    },
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

  const anchorClassNames = clsx(
    styles.content,
    styles[`${color}Color`],
    styles[variant],
    {
      [styles[`anchorOrigin${anchorOrigin.vertical}${anchorOrigin.horizontal}`]]:
      anchorOrigin.vertical && anchorOrigin.horizontal,
    }
  );

  return (
    <div className={classNames} {...props}>
      {children}
      <span className={anchorClassNames}>
        {variant !== 'dot' && badgeContent}
      </span>
    </div>
  );
};

export default Badge;