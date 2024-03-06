import clsx from 'clsx';
import { ChangeEvent, forwardRef, ReactNode } from 'react';

import styles from './Switch.module.sass';

export type SwitchSize = 'small' | 'medium' | 'large';

export type SwitchLabelPlacement = 'top' | 'start' | 'bottom' | 'end';

export type SwitchProps = {
  /**
   * Override or extend the style applied to the component.
   */
  className?: string;
  /**
   * If 'true', the component is checked.
   * @default false
   */
  checked?: boolean;
  /**
   * If 'true', the component is disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * A text or an element to be used in an enclosing label element.
   */
  label?: ReactNode;
  /**
   * The position of the label.
   * @default 'end'
   */
  labelPlacement?: SwitchLabelPlacement;
  /**
   * The size of the component.
   * @default 'medium;
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Callback fired when the state is changed.
   *
   * function(event: React.ChangeEvent<HTMLInputElement>) => void
   * event: The event source of the callback. You can pull out the new value by accessing event.target.value (string). You can pull out the new checked state by accessing event.target.checked (boolean).
   * @param e
   */
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Switch component to implement toggle switches.
 * @param {SwitchProps} props The props for the Chip component.
 * @param {React.Ref<HTMLDivElement>} ref The ref for the Chip.
 * @returns {JSX.Element} The Chip component.
 */

const Switch = forwardRef<HTMLDivElement, SwitchProps>((
  {
    checked,
    className,
    disabled,
    label,
    labelPlacement = 'start',
    size,
    onChange,
    ...props
  },
  ref
) => {
  const labelPlacementClassName = 'labelPlacement' + labelPlacement.charAt(0).toUpperCase() + labelPlacement.slice(1);
  const classNames = clsx(
    styles.root,
    size && styles[size],
    disabled && styles.disabled,
    className
  );

  return (
    <div className={classNames} ref={ref} {...props}>
      <label className={clsx(styles.label, label && styles[labelPlacementClassName])}>
        <input
          type="checkbox"
          className={styles.input}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
        />
        <span className={styles.switch} />
        <span className={styles.labelText}>{label}</span>
      </label>
    </div>
  );
});

export default Switch;
