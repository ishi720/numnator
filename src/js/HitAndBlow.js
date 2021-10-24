'use strict';

export class HitAndBlow {
  #answer = [1,2,3];
  constructor () {
    this.count = 0;
  }

  question(arr) {
    var hitCnt = 0;
    var blowCnt = 0;
    var _this = this;
    this.answer.forEach(function(v,i){
      if (_this.answer[i] === arr[i]) {
        hitCnt++;
      }
      if (_this.answer.includes(arr[i])) {
        blowCnt++;
      }
    });
    return [hitCnt,blowCnt-hitCnt];
  }
  
  slash() {
    var max = Math.max(...this.answer);
    var min = Math.min(...this.answer);
    return max - min;
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
