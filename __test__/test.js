const {Numnator} = require('./../src/js/numnator.js');


expect.extend({
  toBeWithinRange(received, floor, ceiling) {
    const pass = received >= floor && received <= ceiling;
    if (pass) {
      return {
        message: () =>
          `expected ${received} not to be within range ${floor} - ${ceiling}`,
        pass: true,
      };
    } else {
      return {
        message: () =>
          `expected ${received} to be within range ${floor} - ${ceiling}`,
        pass: false,
      };
    }
  },
});


describe('test', () => {
	const upperRange = 100;
	const numnator1 = new Numnator(upperRange,0);

	it('answerRange', () => {
		expect(numnator1.answer).toBeWithinRange(0,upperRange);
	});
});