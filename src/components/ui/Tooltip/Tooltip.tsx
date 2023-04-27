import clsx from 'clsx';
import { MouseEvent, ReactNode, useRef, useState } from 'react';

import useOnClickOutside from '../../../hooks/useOnClickOutside';

import styles from './Tooltip.module.sass';

export type TooltipProps = {
  action?: 'hover' | 'click';
  /**
   * If true, adds an arrow to the tooltip.
   * default 'false'
   */
  arrow?: boolean;
  /**
   * Tooltip reference element.
   */
  children?: ReactNode;
  /**
   * Override or extend the style applied to the component.
   */
  className?: string;
  /**
   * Tooltip content. Zero-length content string, undefined, null and false are never displayed.
   */
  content?: ReactNode;
  /**
   * The number of milliseconds to wait before showing the tooltip.
   * default 0
   */
  delay?: number;
  /**
   * If true, the component is shown.
   * default 'false'
   */
  open?: boolean;
  /**
   * Tooltip placement.
   * default 'bottom'
   */
  placement?: 'bottom-end'
    | 'bottom-start'
    | 'bottom'
    | 'left-end'
    | 'left-start'
    | 'left'
    | 'right-end'
    | 'right-start'
    | 'right'
    | 'top-end'
    | 'top-start'
    | 'top';
  /**
   * Theme style of the tooltip.
   * default 'dark'
   */
  theme?: 'dark' | 'light';
  /**
   * The width of tooltip.
   * default 'auto'
   */
  width?: number | 'auto';
};

const Tooltip = ({
  action = 'hover',
  arrow,
  content,
  className,
  children,
  delay = 0,
  open,
  placement = 'bottom',
  theme = 'dark',
  width = 'auto',
}: TooltipProps) => {
  const [active, setActive] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  const timeout = () => {
    setTimeout(() => {
      setActive(true);
    }, delay ?? 400);
  };

  const showTip = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    timeout();
  };

  const hideTip = () => {
    setActive(false);
  };

  useOnClickOutside(ref, hideTip);

  return (
    <div
      ref={ref}
      role="tooltip"
      className={styles.wrapper}
      {...(action === 'hover'
        ? {
          onMouseEnter: showTip,
          onMouseLeave: hideTip
        }
        : {
          onClick: showTip
        })}
    >
      {children}
      {content && (active || open) && (
        <div
          style={{ width }}
          className={clsx(styles.root, styles[placement], styles[theme], className)}
        >
          {content}
          {arrow && (
            <span className={styles.arrow} />
          )}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
