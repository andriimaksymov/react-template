import { forwardRef, ReactNode } from 'react';
import clsx from 'clsx';

import styles from './Card.module.sass';

export type CardElevation = 0 | 1 | 2 | 3 | 4;

export type CardProps = {
  hasBorder?: boolean;
  borderColor?: string;
  className?: string;
  children?: ReactNode;
  elevation?: CardElevation;
}

const Card = forwardRef<HTMLDivElement, CardProps>((
  {
    hasBorder,
    borderColor,
    className,
    children,
    elevation,
  }, ref) => {
  const classNames = clsx(styles.root, className, elevation && [styles[`elevation${elevation}`]], {
    [styles.withBorder]: hasBorder,
  });

  return (
    <div ref={ref} className={classNames} style={{
      ...(borderColor && { borderColor })
    }}>
      {children}
    </div>
  );
});

export default Card;