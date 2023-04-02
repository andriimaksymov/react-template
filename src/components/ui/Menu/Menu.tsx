import { ReactNode, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

import Portal from '../../Portal';

import styles from './Menu.module.sass';

export type MenuPosition = 'topLeft' | 'topRight' | 'topCenter' | 'bottomLeft' | 'bottomRight' | 'bottomCenter';

export interface MenuProps {
  /**
   * An HTML element, or a function that returns one. It's used to set the position of the menu.
   */
  anchorEl?: Element;
  /**
   * Override or extend the style applied to the component.
   */
  className?: string;
  /**
   * If 'true', the component is shown.
   */
  isOpen: boolean;
  position?: MenuPosition;
  fullWidth?: boolean;
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

type Positions = {
  [keys in MenuPosition]?: {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
  }
}

const Menu = (props: MenuProps) => {
  const {
    anchorEl,
    isOpen,
    position = 'topLeft',
    fullWidth,
    elevation,
    className,
    children,
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
  const [positions, setPositions] = useState<Positions>({});
  const [width, setWidth] = useState<number>(240);

  useEffect(() => {
    if (anchorEl && menuRef?.current) {
      const anchorRect = anchorEl.getBoundingClientRect();
      setWidth(anchorRect ? (anchorRect.right - anchorRect.left) : 0)
      const menuWidth = menuRef.current.getBoundingClientRect().width;

      setPositions({
        topLeft: {
          top: anchorRect.bottom,
          left: anchorRect.left,
        },
        topRight: {
          top: anchorRect.top,
          left: anchorRect.left + width,
        },
        topCenter: {
          top: anchorRect.top,
          left: anchorRect.left - menuWidth / 2,
        },
        bottomLeft: {
          top: anchorRect.bottom,
          left: anchorRect.left,
        },
        bottomRight: {
          top: anchorRect.bottom,
          left: anchorRect.left - menuWidth + width,
        },
        bottomCenter: {
          top: anchorRect.bottom,
          left: anchorRect.left - menuWidth / 2,
        },
      });
    }
  }, [anchorEl]);

  const style = {
    ...positions[position],
    ...(fullWidth && { width }),
  };

  return (
    isOpen ? (
      <Portal>
        <div className={classNames} ref={menuRef} style={style}>
          {children}
        </div>
        <div className={styles.backDrop} onClick={onClose} />
      </Portal>
    ) : null
  );
};

export default Menu;
