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


describe('answer_rand', () => {
	const upperRange = 100;
	const numnator1 = new Numnator(upperRange,0);

	it('answerRange', () => {
		expect(numnator1.answer).toBeWithinRange(0,upperRange);
	});
});


describe('answer_10', () => {
  const upperRange = 100;
  const numnator2 = new Numnator(upperRange,0);
  numnator2.answer = 10;

  it('questionMatch', () => {
      expect(numnator2.questionMatch(10)).toBe(true);
      expect(numnator2.questionMatch(11)).toBe(false);
  });

  it('questionOrMore', () => {
      expect(numnator2.questionOrMore(9)).toBe(true);
      expect(numnator2.questionOrMore(10)).toBe(true);
      expect(numnator2.questionOrMore(11)).toBe(false);
  });

  it('questionOrLess', () => {
      expect(numnator2.questionOrLess(9)).toBe(false);
      expect(numnator2.questionOrLess(10)).toBe(true);
      expect(numnator2.questionOrLess(11)).toBe(true);
  });

  it('questionAbove', () => {
      expect(numnator2.questionAbove(9)).toBe(true);
      expect(numnator2.questionAbove(10)).toBe(false);
      expect(numnator2.questionAbove(11)).toBe(false);
  });

  it('questionBelow', () => {
      expect(numnator2.questionBelow(9)).toBe(false);
      expect(numnator2.questionBelow(10)).toBe(false);
      expect(numnator2.questionBelow(11)).toBe(true);
  });
  
  it('questionDivided', () => {
      expect(numnator2.questionDivided(2)).toBe(true);
      expect(numnator2.questionDivided(5)).toBe(true);
      expect(numnator2.questionDivided(7)).toBe(false);
  });

  it('questionPlace', () => {
      expect(numnator2.questionPlace(1,0)).toBe(true);
      expect(numnator2.questionPlace(1,1)).toBe(false);
      expect(numnator2.questionPlace(2,1)).toBe(true);
      expect(numnator2.questionPlace(2,2)).toBe(false);
  });

  it('questionPrimeNumber', () => {
      expect(numnator2.questionPrimeNumber()).toBe(false);
  });

  it('questionContainsChara', () => {
      expect(numnator2.questionContainsChara(0)).toBe(true);
      expect(numnator2.questionContainsChara(1)).toBe(true);
      expect(numnator2.questionContainsChara(2)).toBe(false);
      expect(numnator2.questionContainsChara(3)).toBe(false);
      expect(numnator2.questionContainsChara(4)).toBe(false);
      expect(numnator2.questionContainsChara(5)).toBe(false);
  });

  it('questionNumberOfDigits', () => {
      expect(numnator2.questionNumberOfDigits(1)).toBe(false);
      expect(numnator2.questionNumberOfDigits(2)).toBe(true);
      expect(numnator2.questionNumberOfDigits(3)).toBe(false);
  });
});