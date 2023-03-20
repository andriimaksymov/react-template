import { forwardRef, HTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

import styles from './Card.module.sass';

export type CardElevation = 0 | 1 | 2 | 3 | 4;

export type CardProps = {
  /**
   * Border color of the card.
   */
  borderColor?: string;
  /**
   * Override or extend the styles applied to the component.
   */
  className?: string;
  /**
   * The content render inside the card.
   */
  children?: ReactNode;
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 4 inclusive.
   * @default 1
   */
  elevation?: CardElevation;
  /**
   * If 'true' the card has 1px border.
   * @default false
   */
  hasBorder?: boolean;
} & HTMLAttributes<HTMLDivElement>

const Card = forwardRef<HTMLDivElement, CardProps>((
  {
    hasBorder,
    borderColor,
    className,
    children,
    elevation= 1,
    ...props
  }, ref) => {
  const classNames = clsx(styles.root, className, elevation && [styles[`elevation${elevation}`]], {
    [styles.withBorder]: hasBorder || borderColor,
  });

  return (
    <div
      ref={ref}
      className={classNames}
      style={{
      ...(borderColor && { borderColor })
      }}
      {...props}
    >
      {children}
    </div>
  );
});

export default Card;