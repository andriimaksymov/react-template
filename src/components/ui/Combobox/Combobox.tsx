import clsx from 'clsx';
import { useCombobox } from 'downshift';
import React from 'react';

import Input, { InputProps } from '../Input';

import styles from './Combobox.module.sass';

export type ComboboxItem = {
  value: string;
  key?: string | number;
};

export type ComboboxProps = {
  items: Array<ComboboxItem>;
  maxItems?: number;
  value?: string;
  allowCustomValueSelection?: boolean;
  onChange: (value: string) => void;
  onSelect?: (value: ComboboxItem | null | undefined) => void;
} & Omit<InputProps, 'value' | 'onChange' | 'onSelect'>;

function Combobox(
  {
    items,
    maxItems = 5,
    value,
    allowCustomValueSelection,

    onChange,
    onSelect,

    ...inputProps
  }: ComboboxProps) {
  const limitedItems = items.slice(0, maxItems);

  const { isOpen, highlightedIndex, getInputProps, getItemProps, getMenuProps, selectItem, setInputValue } =
    useCombobox({
      items: limitedItems,
      inputValue: value,
      itemToString: (item) => {
        return item?.value ?? '';
      },
      onInputValueChange: (changes) => {
        onChange(changes.inputValue ?? '');
      },
      onSelectedItemChange: (changes) => {
        onSelect?.(changes.selectedItem);
      }
    });

  const onInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    inputProps.onKeyDown?.(event);

    if (allowCustomValueSelection && event.key === 'Enter') {
      selectItem({
        value: event.currentTarget.value
      });
      setInputValue('');
    }
  };

  return (
    <div className={styles.root}>
      <Input
        {...getInputProps({
          ...inputProps,
          onKeyDown: onInputKeyDown
        })}
      />
      <div
        className={clsx(styles.suggestionMenu, {
          [styles.openSuggestionMenu]: isOpen && items.length > 0
        })}
        {...getMenuProps()}
      >
        {isOpen && (
          <>
            {limitedItems.map((item, index) => (
              <div
                key={item.key ?? index}
                className={clsx(styles.suggestion, {
                  [styles.highlightedSuggestion]: highlightedIndex === index
                })}
                {...getItemProps({
                  item,
                  index
                })}
              >
                {item.value}
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default Combobox;
