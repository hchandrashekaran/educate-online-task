/* METHOD: sortArrayOfStrings()
Defines the concise and effective way of sorting array of strings,
cloneDeep function from lodash libray is used to perform deepcopy, to avoid the modification of the original array.
localeCompare() method is used to handle case insensitive strings with numeric sorting.
Array function and implicit return is used to make function clean and readable with minimal syntax.
Function uses JavaScript’s built-in .sort(), which runs in O(n log n) time complexity.
*/

const _ = require('lodash')

const sortArrayOfStrings = (array) =>
    _.cloneDeep(array).sort((a, b) =>
        a.localeCompare(b, undefined, {
            numeric: true,
            sensitivity: 'base'
        })
    )

module.exports = sortArrayOfStrings;