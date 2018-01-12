let idCounter = 1;

/**
 * This generates a unique ID for all autocomplete inputs
 * @param {String} prefix the prefix for the id
 * @return {String} the unique ID
 */
function generateId(prefix = 'garden') {
  return `${prefix}-${idCounter++}`
}

/**
 * This is only used in tests... Could be useful in SSR?
 * @param {Number} num The number to set the idCountry to
 */
function setIdCounter(num) {
  idCounter = num
}

/** @component */
export default {
  generateId,
  setIdCounter
};
