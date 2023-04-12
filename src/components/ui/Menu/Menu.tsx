import { ReactNode, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

import Portal from '../../Portal';

import styles from './Menu.module.sass';

export interface MenuOrigin {
  vertical: 'top' | 'center' | 'bottom';
  horizontal: 'left' | 'center' | 'right';
}

export interface MenuPosition {
  top: number;
  left: number;
}

export interface MenuProps {
  /**
   * An HTML element, or a function that returns one. It's used to set the position of the menu.
   */
  anchorEl?: Element;
  /**
   * This is the point on the anchor where the popover's
   * `anchorEl` will attach to. This is not used when the
   * anchorReference is 'anchorPosition'.
   *
   * Options:
   * vertical: [top, center, bottom];
   * horizontal: [left, center, right].
   * @default {
   *   vertical: 'top',
   *   horizontal: 'left',
   * }
   */
  anchorOrigin?: MenuOrigin;
  /**
   * The position that may be used to set the position of the popover.
   * The coordinates are relative to the application's client area.
   */
  anchorPosition?: MenuPosition;
  /**
   * Override or extend the style applied to the component.
   */
  className?: string;
  /**
   * If 'true', the component is shown.
   */
  isOpen: boolean;
  /**
   * This is the point on the popover which
   * will attach to the anchor's origin.
   *
   * Options:
   * vertical: [top, center, bottom, x(px)];
   * horizontal: [left, center, right, x(px)].
   * @default {
   *   vertical: 'top',
   *   horizontal: 'left',
   * }
   */
  transformOrigin?: MenuOrigin;
  /**
   * If 'true' menu width contain target element width
   * @default false
   */
  fullWidth?: boolean;
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 4 inclusive.
   * @default 1
   */
  elevation?: 1 | 2 | 3 | 4;
  /**
   * Menu contents, normally MenuItems.
   */
  children?: ReactNode;
  /**
   * Callback fired when the component requests to be closed.
   */
  onClose?: () => void;
}

const Menu = (props: MenuProps) => {
  const {
    anchorEl,
    anchorOrigin = {
      vertical: 'top',
      horizontal: 'left'
    },
    anchorPosition,
    className,
    children,
    elevation,
    fullWidth,
    isOpen,
    transformOrigin = {
      vertical: 'top',
      horizontal: 'left'
    },

    onClose,
  } = props;

  const classNames = clsx(
    styles.root,
    className,
    {
      [styles[`elevation${elevation}`]]: elevation,
    },
  );
  const menuRef = useRef<HTMLDivElement>(null);
  const [menuStyle, setMenuStyle] = useState({});

  useEffect(() => {
    if (anchorEl && menuRef?.current) {
      const anchorRect = anchorEl.getBoundingClientRect();
      const { width: menuWidth, height: menuHeight } = menuRef.current.getBoundingClientRect();

      const { top, left, width, height } = anchorRect;

      const calculateTopPosition = () => {
        let anchor = 0;
        let transform = 0;
        if (anchorPosition) {
          anchor = anchorPosition.top;
        } else {
          if (anchorOrigin.vertical === 'top') {
            anchor += top;
          } else {
            anchor += top + height / (anchorOrigin.vertical === 'center' ? 2 : 1)
          }

          if (transformOrigin.vertical === 'center') {
            transform += menuHeight / 2
          } else if (transformOrigin.vertical === 'bottom') {
            transform += menuHeight;
          }
        }

        return anchor - transform;
      };

      const calculateLeftPosition = () => {
        let anchor = 0;
        let transform = 0;
        if (anchorPosition) {
          anchor = anchorPosition.top;
        } else {
          if (anchorOrigin.horizontal === 'left') {
            anchor += left;
          } else {
            anchor += left + width / (anchorOrigin.horizontal === 'center' ? 2 : 1)
          }

          if (transformOrigin.horizontal === 'center') {
            transform += menuWidth / 2
          } else if (transformOrigin.horizontal === 'right') {
            transform += menuWidth;
          }
        }

        return anchor - transform;
      };

      setMenuStyle({
        top: calculateTopPosition(),
        left: calculateLeftPosition(),
        ...(fullWidth && { width }),
      });
    }
  }, [menuRef, anchorEl]);

  return (
    isOpen ? (
      <Portal>
        <div className={classNames} ref={menuRef} style={menuStyle}>
          {children}
        </div>
        <div className={styles.backDrop} onClick={onClose} />
      </Portal>
    ) : null
  );
};

export default Menu;
