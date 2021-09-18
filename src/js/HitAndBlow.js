'use strict';

export class HitAndBlow {
  constructor () {
    this.answer = [1,2,3];
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
}
