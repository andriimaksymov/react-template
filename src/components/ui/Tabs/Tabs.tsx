import clsx from 'clsx';
import { ReactElement, ReactNode, useEffect, useRef, useState } from 'react';

import styles from './Tabs.module.sass';

export type TabsTab = {
  /**
   * The label of the tab.
   */
  label: string | ReactElement;
  /**
   * The index of the tab.
   */
  index: number;
  /**
   * The content to be displayed when this tab is selected.
   */
  content: ReactNode;
};

export type TabsProps = {
  /**
   * Additional class name for the root element.
   */
  className?: string;
  /**
   * Array of tabs to be rendered.
   */
  tabs: TabsTab[];
  /**
   * The index of the currently selected tab.
   */
  selectedTab: number;
  /**
   * Callback function to handle tab change.
   */
  onChange: (index: number) => void;
  /**
   * The orientation of the tabs. Can be 'horizontal' or 'vertical'.
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';
  /**
   * The variant of the tabs. Can be 'underline' or 'outlined'.
   * @default 'underline'
   */
  variant?: 'underline' | 'outlined';
  /**
   * Whether to lazy load the tab content. If true, content of inactive tabs will not be rendered until they are selected.
   * @default false
   */
  lazyLoad?: boolean;
};

/**
 * A component to display tabs with associated content.
 * @param {TabsProps} props - The props for the Tabs component.
 * @returns {JSX.Element} - The rendered Tabs component.
 */

const Tabs = ({
  className = '',
  tabs = [],
  selectedTab = 0,
  variant = 'underline',
  orientation = 'horizontal',
  onChange
}: TabsProps) => {
  const Panel = tabs && tabs.find((tab) => tab.index === selectedTab);

  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

  const tabsRef = useRef<HTMLDivElement[]>([]);

  const handleChange = (index: number) => {
    onChange(index);
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
            onClick={() => handleChange(tab.index)}
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
        {Panel?.content}
      </div>
    </div>
  );
};

export default Tabs;
