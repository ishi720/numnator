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
	const numnator = new Numnator(upperRange,0);

	it('answerRange', () => {
		expect(numnator.answer).toBeWithinRange(0,upperRange);
	});
});


describe('answer_10', () => {
  const upperRange = 100;
  const liarDegree = 0;
  const numnator = new Numnator(upperRange,liarDegree);
  numnator.answer = 10;

  it('questionMatch', () => {
      expect(numnator.questionMatch(10)).toBe(true);
      expect(numnator.questionMatch(11)).toBe(false);
  });

  it('questionOrMore', () => {
      expect(numnator.questionOrMore(9)).toBe(true);
      expect(numnator.questionOrMore(10)).toBe(true);
      expect(numnator.questionOrMore(11)).toBe(false);
  });

  it('questionOrLess', () => {
      expect(numnator.questionOrLess(9)).toBe(false);
      expect(numnator.questionOrLess(10)).toBe(true);
      expect(numnator.questionOrLess(11)).toBe(true);
  });

  it('questionAbove', () => {
      expect(numnator.questionAbove(9)).toBe(true);
      expect(numnator.questionAbove(10)).toBe(false);
      expect(numnator.questionAbove(11)).toBe(false);
  });

  it('questionBelow', () => {
      expect(numnator.questionBelow(9)).toBe(false);
      expect(numnator.questionBelow(10)).toBe(false);
      expect(numnator.questionBelow(11)).toBe(true);
  });
  
  it('questionDivided', () => {
      expect(numnator.questionDivided(2)).toBe(true);
      expect(numnator.questionDivided(5)).toBe(true);
      expect(numnator.questionDivided(7)).toBe(false);
  });

  it('questionPlace', () => {
      expect(numnator.questionPlace(1,0)).toBe(true);
      expect(numnator.questionPlace(1,1)).toBe(false);
      expect(numnator.questionPlace(2,1)).toBe(true);
      expect(numnator.questionPlace(2,2)).toBe(false);
  });

  it('questionPrimeNumber', () => {
      expect(numnator.questionPrimeNumber()).toBe(false);
  });

  it('questionContainsChara', () => {
      expect(numnator.questionContainsChara(0)).toBe(true);
      expect(numnator.questionContainsChara(1)).toBe(true);
      expect(numnator.questionContainsChara(2)).toBe(false);
      expect(numnator.questionContainsChara(3)).toBe(false);
      expect(numnator.questionContainsChara(4)).toBe(false);
      expect(numnator.questionContainsChara(5)).toBe(false);
  });

  it('questionNumberOfDigits', () => {
      expect(numnator.questionNumberOfDigits(1)).toBe(false);
      expect(numnator.questionNumberOfDigits(2)).toBe(true);
      expect(numnator.questionNumberOfDigits(3)).toBe(false);
  });
});


describe('answer_101_lier', () => {
  const upperRange = 1000;
  const liarDegree = 100;
  const numnator = new Numnator(upperRange,liarDegree);
  numnator.answer = 101;

  it('questionMatch', () => {
      expect(numnator.questionMatch(101)).toBe(true);
      expect(numnator.questionMatch(102)).toBe(false);
  });

  it('questionOrMore', () => {
      expect(numnator.questionOrMore(100)).toBe(false);
      expect(numnator.questionOrMore(101)).toBe(false);
      expect(numnator.questionOrMore(102)).toBe(true);
  });

  it('questionOrLess', () => {
      expect(numnator.questionOrLess(100)).toBe(true);
      expect(numnator.questionOrLess(101)).toBe(false);
      expect(numnator.questionOrLess(102)).toBe(false);
  });

  it('questionAbove', () => {
      expect(numnator.questionAbove(100)).toBe(false);
      expect(numnator.questionAbove(101)).toBe(true);
      expect(numnator.questionAbove(102)).toBe(true);
  });

  it('questionBelow', () => {
      expect(numnator.questionBelow(100)).toBe(true);
      expect(numnator.questionBelow(101)).toBe(true);
      expect(numnator.questionBelow(102)).toBe(false);
  });
  
  it('questionDivided', () => {
      expect(numnator.questionDivided(2)).toBe(true);
      expect(numnator.questionDivided(5)).toBe(true);
      expect(numnator.questionDivided(101)).toBe(false);
  });

  it('questionPlace', () => {
      expect(numnator.questionPlace(1,1)).toBe(false);
      expect(numnator.questionPlace(1,0)).toBe(true);
      expect(numnator.questionPlace(2,0)).toBe(false);
      expect(numnator.questionPlace(2,1)).toBe(true);
      expect(numnator.questionPlace(3,1)).toBe(false);
      expect(numnator.questionPlace(3,0)).toBe(true);
  });

  it('questionPrimeNumber', () => {
      expect(numnator.questionPrimeNumber()).toBe(false);
  });

  it('questionContainsChara', () => {
      expect(numnator.questionContainsChara(0)).toBe(false);
      expect(numnator.questionContainsChara(1)).toBe(false);
      expect(numnator.questionContainsChara(2)).toBe(true);
      expect(numnator.questionContainsChara(3)).toBe(true);
      expect(numnator.questionContainsChara(4)).toBe(true);
      expect(numnator.questionContainsChara(7)).toBe(true);
      expect(numnator.questionContainsChara(8)).toBe(true);
      expect(numnator.questionContainsChara(9)).toBe(true);
  });

  it('questionNumberOfDigits', () => {
      expect(numnator.questionNumberOfDigits(1)).toBe(true);
      expect(numnator.questionNumberOfDigits(2)).toBe(true);
      expect(numnator.questionNumberOfDigits(3)).toBe(false);
  });
});