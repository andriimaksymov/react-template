import clsx from 'clsx';
import { ChangeEvent, ComponentPropsWithoutRef, ElementType, forwardRef, ReactNode, useState } from 'react';

import { ReactComponent as DefaultIcon } from './assets/unchecked-icon.svg';
import { ReactComponent as DefaultCheckedIcon } from './assets/checked-icon.svg';

import styles from './Checkbox.module.sass';

export type CheckboxProps = {
  /**
   * Override or extend the style applied to the component.
   */
  className?: string;
  /**
   * Icon to be used if checkbox is checked.
   */
  checkedIcon?: ElementType;
  /**
   * A text or an element to be used in an enclosing label element.
   */
  label?: ReactNode;
  /**
   * The position of the label.
   * @default 'end'
   */
  labelPlacement?: 'top' | 'start' | 'bottom' | 'end';
  /**
   * Icon to be used if checkbox is unchecked.
   */
  icon?: ElementType;
} & ComponentPropsWithoutRef<'input'>

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((
  {
    className,
    label,
    icon: Icon,
    checkedIcon: CheckedIcon,
    labelPlacement = 'end',
    ...props
  }, ref) => {

  const [checked, setChecked] = useState<boolean>(props.defaultChecked || props.checked || false);
  const classNames = clsx(styles.root, className, props.disabled && [styles.disabled], {
    [styles.placementStart]: labelPlacement === 'start',
    [styles.placementTop]: labelPlacement === 'top',
    [styles.placementBottom]: labelPlacement === 'bottom',
    [styles.placementEnd]: labelPlacement === 'end',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    props.onChange?.(e);
  };

  return (
    <label className={classNames}>
      <input
        ref={ref}
        type="checkbox"
        className={styles.input}
        onChange={handleChange}
        {...props}
      />
      {checked ? (
        CheckedIcon ? (
          <CheckedIcon className={styles.icon} />
        ) : (
          <DefaultCheckedIcon className={styles.icon} />
        )
      ) : (
        Icon ? (
          <Icon className={styles.icon} />
        ) : (
          <DefaultIcon className={styles.icon} />
        )
      )}
      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
});

export default Checkbox;
