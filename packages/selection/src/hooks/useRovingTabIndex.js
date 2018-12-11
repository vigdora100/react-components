/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { useState, useRef } from 'react';
import composeEventHandlers from '../utils/composeEventHandlers';
import KEY_CODES from '../constants/KEY_CODES';

const DIRECTION = {
  HORIZONTAL: 'horizontal',
  VERTICAL: 'vertical'
};

/**
 * getUpdatedFocusedIndex
 * @param {*} keyCode
 * @param {*} direction
 * @param {*} focusedIndex
 * @param {*} numItems
 */
function getUpdatedFocusedIndex(keyCode, direction, focusedIndex, numItems) {
  if (keyCode === KEY_CODES.HOME) {
    return 0;
  } else if (keyCode === KEY_CODES.END) {
    return numItems - 1;
  }

  if (direction === DIRECTION.VERTICAL) {
    if (keyCode === KEY_CODES.DOWN) {
      return (focusedIndex + 1) % numItems;
    } else if (keyCode === KEY_CODES.UP) {
      return (focusedIndex + numItems - 1) % numItems;
    }
  } else if (direction === DIRECTION.HORIZONTAL) {
    if (keyCode === KEY_CODES.LEFT) {
      return (focusedIndex + numItems - 1) % numItems;
    } else if (keyCode === KEY_CODES.RIGHT) {
      return (focusedIndex + 1) % numItems;
    }
  }

  return undefined;
}

/**
 * Built to the MDN documentation
 * https://developer.mozilla.org/en-US/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets
 */
function useRovingTabIndex({ defaultIndex = 0, direction = DIRECTION.HORIZONTAL } = {}) {
  const [focusedIndex, setFocusedIndex] = useState(defaultIndex);
  const [selectedIndex, setSelectedIndex] = useState(defaultIndex);

  const refs = [];
  let numItems = 0;

  const getWrapperProps = ({ onBlur, ...other } = {}) => {
    return {
      onBlur: composeEventHandlers(onBlur, e => {
        // console.log('blurring');
        // console.log(e.target);
        // console.log(e.target.tabIndex);
        // console.log(e.target.getAttribute('tabindex'));
      }),
      ...other
    };
  };

  const getItemProps = ({ onKeyDown, onFocus, onClick, refKey = 'ref', ...other } = {}) => {
    const itemIndex = numItems;
    const isCurrent = focusedIndex === itemIndex;

    refs[itemIndex] = useRef(null);
    const innerRef = refs[itemIndex];

    numItems++;

    return {
      tabIndex: isCurrent ? 0 : -1,
      onClick: composeEventHandlers(onClick, () => {
        setSelectedIndex(itemIndex);
      }),
      onFocus: composeEventHandlers(onFocus, () => {
        setFocusedIndex(itemIndex);
      }),
      onKeyDown: composeEventHandlers(onKeyDown, e => {
        const newFocusedIndex = getUpdatedFocusedIndex(
          e.keyCode,
          direction,
          focusedIndex,
          numItems
        );

        if (typeof newFocusedIndex !== 'undefined') {
          e.preventDefault();
          refs[newFocusedIndex].current.focus();

          return;
        }

        if (e.keyCode === KEY_CODES.SPACE || e.keyCode === KEY_CODES.ENTER) {
          setSelectedIndex(itemIndex);
        }
      }),
      [refKey]: innerRef,
      ...other
    };
  };

  return {
    focusedIndex,
    selectedIndex,
    getItemProps,
    getWrapperProps
  };
}

export default useRovingTabIndex;
