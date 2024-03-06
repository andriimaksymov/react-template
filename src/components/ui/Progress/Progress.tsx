import clsx from 'clsx';

import styles from './Progress.module.sass';

export type ProgressProps = {
  /**
   * If 'true' it animate the stripes right to left. Work only if 'striped' is true.
   * @default false
   */
  animated?: boolean;
  /**
   * The color of progress bar.
   * @default 'primary'
   */
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  /**
   * Override or extend the styles applied to the progress wrapper.
   */
  className?: string;
  /**
   * Override or extend the styles applied to the progress bar.
   */
  classNameBar?: string;
  /**
   * The label inside the progress.
   */
  label?: string;
  /**
   * Current value of progress.
   * @default 0
   */
  progress: number;
  /**
   * If 'true' the progress have a gradient to create a striped effect.
   * @default false
   */
  striped?: boolean;
};

/**
 * Progress component to display progress bars.
 * @param {ProgressProps} props - The props for the Progress component.
 * @returns {JSX.Element} - The rendered Progress component.
 */

const Progress = (
  {
    animated,
    color = 'primary',
    className,
    classNameBar,
    label,
    progress = 0,
    striped
  }: ProgressProps) => {
  return (
    <div
      className={clsx(styles.root, className)}
    >
      <div
        className={clsx(styles.bar, styles[color], classNameBar, {
          [styles.striped]: striped,
          [styles.animated]: striped && animated,
        })}
        style={{ width: `${progress}%` }}
      >
        {label}
      </div>
    </div>
  );
};

export default Progress;
