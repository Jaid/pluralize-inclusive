/** @module pluralize-inclusive */

import originalPluralize from "pluralize"

const pluralizeInclusive = (word, count) => {
  const pluralized = count === 1 ? pluralizeInclusive.singular(word) : pluralizeInclusive.plural(word)
  return `${count} ${pluralized}`
}

Object.assign(pluralizeInclusive, originalPluralize)
Object.setPrototypeOf(pluralizeInclusive, Object.getPrototypeOf(originalPluralize))

/**
 * @function
 * @param {string} word
 * @param {number} count
 * @returns {import("pluralize").default}
 * @example
 * import pluralizeInclusive from "pluralize-inclusive"
 * const result = pluralizeInclusive("Banana", 3)
 * result === "3 Bananas"
 */
export default pluralizeInclusive