import clsx from 'clsx';
import { ReactElement, useEffect, useRef, useState } from 'react';

import styles from './Tabs.module.sass';

export type TabsTab = {
  label: string | ReactElement;
  index: number;
  element?: ReactElement;
};

export type TabsProps = {
  className?: string;
  tabs: TabsTab[];
  selectedTab: number;
  onClick: (index: number) => void;
  orientation?: 'horizontal' | 'vertical';
  variant?: 'underline' | 'outlined';
};

/**
 * Available Props
 * @param className string
 * @param tab Array of object
 * @param selectedTab number
 * @param variant Tab variant Underline | Outlined
 * @param orientation Tab orientation Vertical | Horizontal
 * @param onClick Function to set the active tab
 */
const Tabs = ({
  className = '',
  tabs = [],
  selectedTab = 0,
  variant = 'underline',
  orientation = 'horizontal',
  onClick
}: TabsProps) => {
  const Panel = tabs && tabs.find((tab) => tab.index === selectedTab);

  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

  const tabsRef = useRef<HTMLDivElement[]>([]);

  const handleClick = (index: number) => {
    onClick(index);
  };

  useEffect(() => {
    function setTabPosition() {
      const currentTab = tabsRef.current[selectedTab];
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    }

    setTabPosition();
    window.addEventListener('resize', setTabPosition);

    return () => window.removeEventListener('resize', setTabPosition);
  }, [selectedTab]);

  return (
    <div className={clsx(styles.root, className, styles[orientation], styles[variant])}>
      <div role="tablist" className={styles.tabList} aria-orientation={orientation}>
        <span
          className={styles.decor}
          style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
        />
        {tabs.map((tab) => (
          <div
            className={clsx(styles.tab, {
              [styles.active]: selectedTab === tab.index
            })}
            onClick={() => handleClick(tab.index)}
            key={tab.index}
            role="tab"
            ref={(el) => (tabsRef.current[tab.index] = el as HTMLDivElement)}
            aria-selected={selectedTab === tab.index}
            aria-controls={`tabpanel-${tab.index}`}
            tabIndex={selectedTab === tab.index ? 0 : -1}
            id={`btn-${tab.index}`}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div
        aria-labelledby={`btn-${selectedTab}`}
        className={styles.panel}
        id={`tabpanel-${selectedTab}`}
        role="tabpanel"
      >
        {Panel?.element}
      </div>
    </div>
  );
};

export default Tabs;
