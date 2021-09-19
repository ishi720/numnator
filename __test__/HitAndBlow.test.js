const {HitAndBlow} = require('./../src/js/HitAndBlow.js');

describe('HitAndBlow', () => {
  const hb = new HitAndBlow();
  hb.answer = [1,2,3];

  it('question_3_0', () => {
    expect(hb.question([1,2,3])).toEqual([3,0]);
  });
  it('question_2_0', () => {
    expect(hb.question([1,2,4])).toEqual([2,0]);
  });
  it('question_1_0', () => {
    expect(hb.question([1,5,4])).toEqual([1,0]);
  });
  it('question_0_0', () => {
    expect(hb.question([6,5,4])).toEqual([0,0]);
  });
  it('question_1_2', () => {
    expect(hb.question([1,3,2])).toEqual([1,2]);
  });
  it('question_0_3', () => {
    expect(hb.question([3,1,2])).toEqual([0,3]);
  });
  it('question_0_2', () => {
    expect(hb.question([6,1,2])).toEqual([0,2]);
  });
  it('question_0_1', () => {
    expect(hb.question([6,5,2])).toEqual([0,1]);
  });
});