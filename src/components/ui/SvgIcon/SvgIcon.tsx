import { ElementType } from 'react';
import clsx from 'clsx';

import styles from './SvgIcon.module.sass';

export type SvgIconProps = {
  /**
   * Override or extend styles applied to the component
   */
  className?: string;
  /**
   * The color of the component
   * @default 'inherit'
   */
  color?: 'inherit' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | 'muted';
  /**
   * The fontSize applied to the icon. Default to 24px, but can be configure to inherit font size
   * @default 'medium'
   */
  fontSize?: 'inherit' | 'large' | 'medium' | 'small';
  /**
   * Svg icon used for the root node
   */
  icon: ElementType,
}

const SvgIcon = (
  {
    className,
    color = 'inherit',
    fontSize = 'medium',
    icon: Icon, ...props
  }: SvgIconProps) => {

  const classNames = clsx(
    styles.root,
    styles[`${fontSize}FontSize`],
    styles[`${color}Color`],
    className
  );

  return (
    <Icon className={classNames} {...props} />
  );
};

export default SvgIcon;