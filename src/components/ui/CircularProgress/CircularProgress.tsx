import clsx from 'clsx';

import styles from './CircularProgress.module.sass';

export type CircularProgressProps = {
  /**
   * The color of the progress.
   * @default 'primary'
   */
  color?: 'primary' | 'secondary' | 'inherit';
  /**
   * Override or extend styles applied to the component.
   */
  className?: string;
  /**
   * The size of the component.
   * If using a number, the pixel unit is assumed.
   * If using a string, you need to provide the CSS unit, e.g '3rem'.
   * @default 40
   */
  size?: string | number;
  /**
   * The thickness of the circle.
   * @default 3.6
   */
  thickness?: number;
  /**
   * The value of the progress indicator for the determinate variant. Value between 0 and 100.
   * @default 0
   */
  value?: number;
  /**
   * The variant to use. Use indeterminate when there is no progress value.
   * @default 'indeterminate'
   */
  variant?: 'determinate' | 'indeterminate';
};

/**
 * CircularProgress component for displaying circular progress indicators.
 * @param {CircularProgressProps} props The props for the CircularProgress component.
 * @returns {JSX.Element} The CircularProgress component.
 */

const CircularProgress = (
  {
    color = 'primary',
    className,
    size = 40,
    thickness = 3.6,
    value = 0,
    variant = 'indeterminate'
  }: CircularProgressProps) => {

  const strokeDasharray = 126.920;
  const strokeDashoffset = strokeDasharray - (strokeDasharray / 100) * value;

  return (
    <div
      className={clsx(styles.root, styles[color], styles[variant], className)}
      style={{
        width: size,
        height: size,
        transform: 'rotate(-90deg)'
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="22 22 44 44">
        <circle
          className={clsx(styles.icon, {
            [styles.circleIndeterminate]: variant === 'indeterminate'
          })}
          cx="44"
          cy="44"
          r="20.2"
          strokeWidth={thickness}
          style={{
            strokeDasharray,
            strokeDashoffset: variant === 'indeterminate'
              ? '96px'
              : strokeDashoffset
          }}
        />
      </svg>
    </div>
  );
};

export default CircularProgress;
