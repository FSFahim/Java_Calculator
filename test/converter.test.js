const { WeightConverter } = require('../src/converter'); // Update 'yourFileName.js' with the actual file name

describe('WeightConverter', () => {
    it('converts ounces to pounds and tons correctly', () => {
        expect(WeightConverter("ounces", 4)).toEqual(["0.25 pounds", "0.00 tons"]);
    });

    it('converts pounds to ounces and tons correctly', () => {
        expect(WeightConverter("pounds", 1)).toEqual(["16.00 ounces", "0.00 tons"]);
    });

    it('converts tons to pounds and ounces correctly', () => {
        expect(WeightConverter("tons", 1)).toEqual(["2000.00 pounds", "32000.00 ounces"]);
    });

    it('returns "wrong input" for invalid measurement', () => {
        expect(WeightConverter("invalid", 10)).toEqual("wrong input");
    });
});
