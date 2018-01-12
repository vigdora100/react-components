
function findParent(finder, node, rootNode) {
  if (node !== null && node !== rootNode.parentNode) {
    if (finder(node)) {
      if (node === document.body && node.scrollTop === 0) {
        // in chrome body.scrollTop always return 0
        return document.documentElement
      }
      return node
    } else {
      return findParent(finder, node.parentNode, rootNode)
    }
  } else {
    return null
  }
}

/**
 * Get the closest element that scrolls
 * @param {HTMLElement} node - the child element to start searching for scroll parent at
 * @param {HTMLElement} rootNode - the root element of the component
 * @return {HTMLElement} the closest parentNode that scrolls
 */
const getClosestScrollParent = findParent.bind(
  null,
  node => node.scrollHeight > node.clientHeight + 4,
)

/**
 * Scroll node into view if necessary
 * @param {HTMLElement} node - the element that should scroll into view
 * @param {HTMLElement} rootNode - the root element of the component
 */
// eslint-disable-next-line complexity
export default function scrollIntoView(node, rootNode) {
  const scrollParent = getClosestScrollParent(node, rootNode)
  if (scrollParent === null) {
    return
  }
  const scrollParentStyles = getComputedStyle(scrollParent)
  const scrollParentRect = scrollParent.getBoundingClientRect()
  const scrollParentBorderTopWidth = parseInt(
    scrollParentStyles.borderTopWidth,
    10,
  )
  const scrollParentBorderBottomWidth = parseInt(
    scrollParentStyles.borderBottomWidth,
    10,
  )
  const bordersWidth =
    scrollParentBorderTopWidth + scrollParentBorderBottomWidth
  const scrollParentTop = scrollParentRect.top + scrollParentBorderTopWidth
  const nodeRect = node.getBoundingClientRect()

  if (nodeRect.top < 0 && scrollParentRect.top < 0) {
    scrollParent.scrollTop += nodeRect.top
    return
  }

  if (nodeRect.top < 0) {
    // the item is above the viewport and the parent is not above the viewport
    scrollParent.scrollTop += nodeRect.top - scrollParentTop
    return
  }

  if (nodeRect.top > 0 && scrollParentRect.top < 0) {
    if (
      scrollParentRect.bottom > 0 &&
      nodeRect.bottom + bordersWidth > scrollParentRect.bottom
    ) {
      // the item is below scrollable area
      scrollParent.scrollTop +=
        nodeRect.bottom - scrollParentRect.bottom + bordersWidth
    }
    // item and parent top are on different sides of view top border (do nothing)
    return
  }

  const nodeOffsetTop = nodeRect.top + scrollParent.scrollTop
  const nodeTop = nodeOffsetTop - scrollParentTop
  if (nodeTop < scrollParent.scrollTop) {
    // the item is above the scrollable area
    scrollParent.scrollTop = nodeTop
  } else if (
    nodeTop + nodeRect.height + bordersWidth >
    scrollParent.scrollTop + scrollParentRect.height
  ) {
    // the item is below the scrollable area
    scrollParent.scrollTop =
      nodeTop + nodeRect.height - scrollParentRect.height + bordersWidth
  }
  // the item is within the scrollable area (do nothing)
}
