import clsx from 'clsx';
import { ComponentPropsWithoutRef, forwardRef, ReactNode } from 'react';

import { ReactComponent as DefaultIcon } from './assets/unchecked-icon.svg';
import { ReactComponent as DefaultCheckedIcon } from './assets/checked-icon.svg';

import styles from './Radio.module.sass';

export type RadioProps = {
  /**
   * Override or extend the style applied to the component
   */
  className?: string;
  /**
   * A text or an element to be used in an enclosing label element.
   */
  label?: ReactNode;
  /**
   * The position of the label.
   * @default 'end'
   */
  labelPlacement?: 'start' | 'end';
} & ComponentPropsWithoutRef<'input'>

/**
 * Radio component for selecting a single option from a list.
 * @param {RadioProps} props - The props for the Radio component.
 * @returns {JSX.Element} - The rendered Radio component.
 */

const Radio = forwardRef<HTMLInputElement, RadioProps>((
  {
    className,
    label,
    labelPlacement = 'end',
    ...props
  }, ref) => {
  const classNames = clsx(styles.root, className, props.disabled && [styles.disabled], {
    [styles.placementStart]: labelPlacement === 'start',
    [styles.placementEnd]: labelPlacement === 'end',
  });

  return (
    <label className={classNames}>
      <input
        ref={ref}
        type="radio"
        className={styles.input}
        {...props}
      />
      <div className={styles.iconWrap}>
        {(props.checked || props.defaultChecked) && (
          <DefaultCheckedIcon className={clsx(styles.icon, styles.checkedIcon)} />
        )}
        <DefaultIcon className={styles.icon} />
      </div>
      <span className={styles.label}>{label}</span>
    </label>
  );
});

export default Radio;
