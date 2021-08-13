'use strict';

export class Numnator {
  #answer;
  constructor (upperRange,liarDegree = 0) {
    this.nlist = [];
    this.initNlist(upperRange);

    this.initAnswer(upperRange);

    this.upperRange = upperRange;
    
    this.liarDegree = liarDegree;

    this.history = [];

    this.count = 0;
  }

  // 整数リストの作成
  initNlist(n) {
    for (var i = 0; i < n; i++) {
      this.nlist.push(i);
    }
  }

  initAnswer(n) {
    this.#answer = Math.floor( Math.random() * (n+1) );
  }

  // Setter
  set answer(n){
    if (0 <= n && n <= this.upperRange) {
      this.#answer = n;
    } 
  }
  // Getter
  get answer(){
    return this.#answer;
  }

  //嘘つき変換
  lier(bool) {
    var n = Math.random();
    if(n < 1 - this.liarDegree/100){
      return bool;
    } else {
      return !bool;
    }
  }

/**
 * 質問内容
**/

  //マッチ
  questionMatch(x) {
    this.count++;
    var r = this.isMatch(x, this.#answer);
    this.history.push({
        q: x +"ですか",
        a: r
    });
    var _this = this;
    this.nlist = this.nlist.filter(function(n){
      if (r){
        return _this.isMatch(x,n);
      } else {
        return !_this.isMatch(x,n);
      }
    });
    return r;
  }

  //X以上
  questionOrMore(x) {
    this.count++;
    var r = this.isOrMore(x, this.#answer);
    this.history.push({
        q: x +"以上ですか",
        a: this.lier(r)
    });
    var _this = this;
    this.nlist = this.nlist.filter(function(n){
      if (r){
        return _this.isOrMore(x,n);
      } else {
        return !_this.isOrMore(x,n);
      }
    });
    return this.lier(r);
  }

  //X以下
  questionOrLess(x) {
    this.count++;
    var r = this.isOrLess(x, this.#answer);
    this.history.push({
        q: x +"以下ですか",
        a: this.lier(r)
    });
    var _this = this;
    this.nlist = this.nlist.filter(function(n){
      if (r) {
        return _this.isOrLess(x,n);
      } else {
        return !_this.isOrLess(x,n);
      }
    });
    return this.lier(r);
  }

  //Xより上
  questionAbove(x) {
    this.count++;
    var r = this.isAbove(x, this.#answer);
    this.history.push({
        q: x +"より上ですか",
        a: this.lier(r)
    });
    var _this = this;
    this.nlist = this.nlist.filter(function(n){
      if (r) {
        return _this.isAbove(x,n);
      } else {
        return !_this.isAbove(x,n);
      }
    });
    return this.lier(r);
  }

  //Xより下
  questionBelow(x) {
    this.count++;
    var r = this.isBelow(x, this.#answer);
    this.history.push({
        q: x +"より下ですか",
        a: this.lier(r)
    });
    var _this = this;
    this.nlist = this.nlist.filter(function(n){
      if (r) {
        return _this.isBelow(x,n);
      } else {
        return !_this.isBelow(x,n);
      }
    });
    return this.lier(r);
  }
  
  questionDivided(x) {
    this.count++;
    var r = this.isDivided(x, this.#answer);
    this.history.push({
        q: x +"で割り切れますか",
        a: this.lier(r)
    });
    var _this = this;
    this.nlist = this.nlist.filter(function(n){
      if (r) {
        return _this.isDivided(x,n);
      } else {
        return !_this.isDivided(x,n);
      }
    });
    return this.lier(r);
  }

  //Pの位がX
  questionPlace(p,x) {
    this.count++;
    var r = this.isPlace(p, x, this.#answer);
    this.history.push({
        q: p + "桁目は" + x +"ですか",
        a: this.lier(r)
    });
    var _this = this;
    this.nlist = this.nlist.filter(function(n){
      if (r) {
        return _this.isPlace(p,x,n);
      } else {
        return !_this.isPlace(p,x,n);
      }
    });
    return this.lier(r);
  }

  //素数
  questionPrimeNumber() {
    this.count++;
    var r = this.isPrimeNumber(this.#answer);
    this.history.push({
        q: "素数ですか",
        a: this.lier(r)
    });
    var _this = this;
    this.nlist = this.nlist.filter(function(n){
      if (r) {
        return _this.isPrimeNumber(n);
      } else {
        return !_this.isPrimeNumber(n);
      }
    });
    return this.lier(r);
  }

  // Xの文字が含まれる
  questionContainsChara(x) {
    this.count++;
    var r = this.isContainsChara(x, this.#answer);
    this.history.push({
        q: x +"の文字は含まれますか",
        a: this.lier(r)
    });
    var _this = this;
    this.nlist = this.nlist.filter(function(n){
      if (r) {
        return _this.isContainsChara(x, n);
      } else {
        return !_this.isContainsChara(x, n);
      }
    });
    return this.lier(r);
  }

  // 桁数
  questionNumberOfDigits(x) {
    this.count++;
    var r = this.isNumberOfDigits(x, this.#answer);
    this.history.push({
        q: x +"桁ですか",
        a: this.lier(r)
    });
    var _this = this;
    this.nlist = this.nlist.filter(function(n){
      if (r) {
        return _this.isNumberOfDigits(x, n);
      } else {
        return !_this.isNumberOfDigits(x, n);
      }
    });
    return this.lier(r);
  }

/**
 * 判定
**/
  isMatch(x, n) {
    return n === x;
  }
  //X以上
  isOrMore(x, n) {
    return n >= x;
  }
  //X以下
  isOrLess(x, n) {
    return n <= x;
  }
  //Xより上
  isAbove(x, n) {
    return n > x;
  }
  //Xより下
  isBelow(x, n) {
    return n < x;
  }
  //Xで割り切れる
  isDivided(x, n) {
    return n % x === 0;
  }
  //P桁目がX
  isPlace(p, x, n) {
    var pw = 1;
    for (var i=1;i<p;i++) {
      pw = pw * 10;
    }
    return Math.floor(n / pw) % 10 === x;
  }
  //素数
  isPrimeNumber(x) {
    var r = true;
    if (x <= 1) {
      r = false;
    }
    for (var i=2; i<=x-1; i++) {
      if (x % i === 0) {
        r = false;
      }
    }
    return r;
  }

  // Xの文字が含まれる
  isContainsChara(x, n) {
    var regExp = new RegExp(x);
    return String(n).match(regExp) !== null;
  }

  //X桁数
  isNumberOfDigits(x, n) {
    return String(n).length === x;
  }
}
