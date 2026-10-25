'use strict';

export class HitAndBlow {
  #answer = [1,2,3];
  constructor () {
    this.count = 0;
  }

  question(arr) {
    let hitCnt = 0;
    let blowCnt = 0;
    this.answer.forEach((v,i) => {
      if (this.answer[i] === arr[i]) {
        hitCnt++;
      }
      if (this.answer.includes(arr[i])) {
        blowCnt++;
      }
    });
    return [hitCnt,blowCnt-hitCnt];
  }
  
  slash() {
    const max = Math.max(...this.answer);
    const min = Math.min(...this.answer);
    return max - min;
  }

  total() {
    return this.answer.reduce((previous,current) => {
      return previous + current;
    });
  }

  // Setter
  set answer(arr){
    this.#answer = arr;
  }
  // Getter
  get answer(){
    return this.#answer;
  }

}
