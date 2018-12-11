/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { useState, useRef } from 'react';
import useRovingTabIndex from './useRovingTabIndex';
import composeEventHandlers from '../utils/composeEventHandlers';
import KEY_CODES from '../constants/KEY_CODES';

const DIRECTION = {
  HORIZONTAL: 'horizontal',
  VERTICAL: 'vertical'
};

// /**
//  * getUpdatedFocusedIndex
//  * @param {*} keyCode
//  * @param {*} direction
//  * @param {*} focusedIndex
//  * @param {*} numItems
//  */
// function getUpdatedFocusedIndex(keyCode, direction, focusedIndex, numItems) {
//   if (keyCode === KEY_CODES.HOME) {
//     return 0;
//   } else if (keyCode === KEY_CODES.END) {
//     return numItems - 1;
//   }

//   if (direction === DIRECTION.VERTICAL) {
//     if (keyCode === KEY_CODES.DOWN) {
//       return (focusedIndex + 1) % numItems;
//     } else if (keyCode === KEY_CODES.UP) {
//       return (focusedIndex + numItems - 1) % numItems;
//     }
//   } else if (direction === DIRECTION.HORIZONTAL) {
//     if (keyCode === KEY_CODES.LEFT) {
//       return (focusedIndex + numItems - 1) % numItems;
//     } else if (keyCode === KEY_CODES.RIGHT) {
//       return (focusedIndex + 1) % numItems;
//     }
//   }

//   return undefined;
// }

/**
 * Built to the MDN documentation
 * https://developer.mozilla.org/en-US/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets
 */
function useTabsPattern({ defaultFocusedIndex = 0, direction = DIRECTION.HORIZONTAL } = {}) {
  const { focusedIndex, selectedIndex, getItemProps: getRovingItemProps } = useRovingTabIndex({
    defaultFocusedIndex,
    direction
  });
  // const [selectedIndex, setFocusedIndex] = useState(defaultFocusedIndex);

  const getTabListProps = ({ role = 'tablist', ...other } = {}) => {
    return {
      role,
      ...other
    };
  };

  const getTabProps = ({ role = 'tab', ...other } = {}) => {
    return {
      role,
      ...other
    };
  };

  // const refs = [];
  // let numItems = 0;

  // const getItemProps = ({ onKeyDown, onFocus, refKey = 'ref', ...other } = {}) => {
  //   const itemIndex = numItems;
  //   const isCurrent = focusedIndex === itemIndex;

  //   refs[itemIndex] = useRef(null);
  //   const innerRef = refs[itemIndex];

  //   numItems++;

  //   return {
  //     tabIndex: isCurrent ? 0 : -1,
  //     onFocus: composeEventHandlers(onFocus, () => {
  //       setFocusedIndex(itemIndex);
  //     }),
  //     onKeyDown: composeEventHandlers(onKeyDown, e => {
  //       const newFocusedIndex = getUpdatedFocusedIndex(
  //         e.keyCode,
  //         direction,
  //         focusedIndex,
  //         numItems
  //       );

  //       if (typeof newFocusedIndex !== 'undefined') {
  //         e.preventDefault();
  //         refs[newFocusedIndex].current.focus();
  //       }
  //     }),
  //     [refKey]: innerRef,
  //     ...other
  //   };
  // };

  return {
    focusedIndex,
    selectedIndex,
    getTabListProps,
    getTabProps: props => getRovingItemProps(getTabProps(props))
  };
}

export default useTabsPattern;
