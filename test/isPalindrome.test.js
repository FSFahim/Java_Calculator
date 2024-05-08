const { isPalindrome } = require('../src/isPalindrome'); // Update 'yourFileName.js' with the actual file name

describe('isPalindrome', () => {
    it('returns true for palindromic numbers', () => {
        expect(isPalindrome(1221)).toBe(true);
    });

    it('returns false for non-palindromic numbers', () => {
        expect(isPalindrome(123)).toBe(false);
    });
});
