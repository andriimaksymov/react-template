import clsx from 'clsx';
import {
  ChangeEvent,
  ComponentPropsWithoutRef,
  ElementType,
  forwardRef,
  ReactNode,
  useState
} from 'react';
import { ReactComponent as DefaultIcon } from './unchecked-icon.svg';
import { ReactComponent as DefaultCheckedIcon } from './checked-icon.svg';
import styles from './Checkbox.module.sass';

export type CheckboxLabelPlacement = 'start' | 'end';

export type CheckboxProps = {
  label?: ReactNode;
  className?: string;
  icon?: ElementType;
  checkedIcon?: ElementType;
  labelPlacement?: CheckboxLabelPlacement;
} & ComponentPropsWithoutRef<'input'>

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({
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
    [styles.placementEnd]: labelPlacement === 'end',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    props.onChange?.(e);
  };

  return (
    <label className={classNames}>
      <input type="checkbox" ref={ref} {...props} className={styles.input} onChange={handleChange} />
      {checked ? (
        CheckedIcon ? <CheckedIcon className={styles.icon} /> : <DefaultCheckedIcon className={styles.icon} />
      ) : (
        Icon ? <Icon className={styles.icon} /> : <DefaultIcon className={styles.icon} />
      )}
      <span className={styles.label}>{label}</span>
    </label>
  );
});

export default Checkbox;
