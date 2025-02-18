/*
Jest is a popular JavaScript testing framework that's widely used for automating unit, integration, and snapshot testing.
Key features of Jest:
1. Built-in-assertions.
2. Code coverage.
3. Default configuration.
4. Extensibility.
*/

const sortArrayOfStrings = require('../binarySort')

describe("sortArrayOfSrings function", () => {
    test("sort an array of strings",() => {
        expect(sortArrayOfStrings(["Harish", "chandrashekaran", "Rob", "Georg"]))
        .toEqual([ 'chandrashekaran', 'Georg', 'Harish', 'Rob' ]);
    })

    test("preserves the original array", () => {
        const array = ["zebra", "monkey", "ant"];
        const sortedArr = sortArrayOfStrings(array);
        expect(array).toEqual(["zebra", "monkey", "ant"]); // Ensure original array is unchanged
        expect(sortedArr).not.toBe(array); // Ensure new array is returned
    });

    test("handles numbers in strings correctly", () => {
    expect(sortArrayOfStrings(["item10", "item2", "item1"])).toEqual(["item1", "item2", "item10"]);
    });
    
    test("handles an empty array", () => {
        expect(sortArrayOfStrings([])).toEqual([]);
    });
    
})