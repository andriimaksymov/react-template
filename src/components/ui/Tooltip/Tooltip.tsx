import React, { MouseEvent, ReactNode, useRef, useState } from 'react';
import clsx from 'clsx';

import useOnClickOutside from '../../../hooks/useOnClickOutside';

import styles from './Tooltip.module.sass';

type TooltipProps = {
  delay?: number;
  width?: number | 'auto';
  action?: 'hover' | 'click';
  direction?: 'bottom-end';
  children?: ReactNode;
  content?: ReactNode;
};

const Tooltip = ({
  width = 'auto',
  action = 'click',
  direction = 'bottom-end',
  delay,
  children,
  content
}: TooltipProps) => {
  const [active, setActive] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  const timeout = () => {
    setTimeout(() => {
      setActive(true);
    }, delay || 400);
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
      {content && active && (
        <div style={{ width }} className={clsx(styles.root, styles[direction])}>
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
