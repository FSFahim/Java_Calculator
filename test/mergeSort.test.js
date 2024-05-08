const { mergeSort, merge } = require('../src/mergeSort'); // Update 'yourFileName.js' with the actual file name

describe('mergeSort', () => {
    it('sorts an empty array', () => {
        expect(mergeSort([])).toEqual([]);
    });

    it('sorts an array with one element', () => {
        expect(mergeSort([1])).toEqual([1]);
    });

    it('sorts an array with multiple elements', () => {
        expect(mergeSort([3, 5, 8, 5, 99, 1])).toEqual([1, 3, 5, 5, 8, 99]);
    });

    it('original', () => {
        expect(mergeSort([2, 4, 6, 1, 3, 5])).toEqual([1, 2, 3, 4, 5, 6]);
    });


    it('covers left[0] == right[0]', () => {
        // Input array designed to cover the scenario where left[0] == right[0]
        const arr = [1, 3, 5, 5, 5, 5];
        expect(mergeSort(arr)).toEqual([1, 3, 5, 5, 5, 5]);
    });
    

    

    


    
});






