const {HitAndBlow} = require('./../src/js/HitAndBlow.js');

describe('HitAndBlow', () => {
	const hb = new HitAndBlow();

	it('question', () => {
		expect(hb.question([1,2,3])).toEqual([3,0]);
	});
});