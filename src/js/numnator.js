'use strict';

export class Numnator {
  constructor (n) {
    this.nlist = [];
    this.setNlist(n);

    this.answer;
    this.setAnswer(n);
    
    this.history = [];
  }

  // 整数リストの作成
  setNlist(n) {
    for (var i = 0; i < n; i++) {
      this.nlist.push(i);
    }
  }

  setAnswer(n) {
    this.answer = Math.floor( Math.random() * (n+1) );
  }

/**
 * 質問内容
**/

  //マッチ
  questionMatch(x) {
    var r = this.isMatch(x, this.answer);
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
    var r = this.isOrMore(x, this.answer);
    this.history.push({
        q: x +"以上ですか",
        a: r
    });
    var _this = this;
    this.nlist = this.nlist.filter(function(n){
      if (r){
        return _this.isOrMore(x,n);
      } else {
        return !_this.isOrMore(x,n);
      }
    });
    return r;
  }

  //X以下
  questionOrLess(x) {
    var r = this.isOrLess(x, this.answer);
    this.history.push({
        q: x +"以下ですか",
        a: r
    });
    var _this = this;
    this.nlist = this.nlist.filter(function(n){
      if (r) {
        return _this.isOrLess(x,n);
      } else {
        return !_this.isOrLess(x,n);
      }
    });
    return r;
  }

  //Xより上
  questionAbove(x) {
    var r = this.isAbove(x, this.answer);
    this.history.push({
        q: x +"より上ですか",
        a: r
    });
    var _this = this;
    this.nlist = this.nlist.filter(function(n){
      if (r) {
        return _this.isAbove(x,n);
      } else {
        return !_this.isAbove(x,n);
      }
    });
    return r;
  }

  //Xより下
  questionBelow(x) {
    var r = this.isBelow(x, this.answer);
    this.history.push({
        q: x +"より下ですか",
        a: r
    });
    var _this = this;
    this.nlist = this.nlist.filter(function(n){
      if (r) {
        return _this.isBelow(x,n);
      } else {
        return !_this.isBelow(x,n);
      }
    });
    return r;
  }
  
  questionDivided(x) {
    var r = this.isDivided(x, this.answer);
    this.history.push({
        q: x +"で割り切れますか",
        a: r
    });
    var _this = this;
    this.nlist = this.nlist.filter(function(n){
      if (r) {
        return _this.isDivided(x,n);
      } else {
        return !_this.isDivided(x,n);
      }
    });
    return r;
  }

  //Pの位がX
  questionPlace(p,x) {
    var r = this.isPlace(p, x, this.answer);
    this.history.push({
        q: p + "桁目は" + x +"ですか",
        a: r
    });
    var _this = this;
    this.nlist = this.nlist.filter(function(n){
      if (r) {
        return _this.isPlace(p,x,n);
      } else {
        return !_this.isPlace(p,x,n);
      }
    });
    return r;
    
  }

  //素数
  questionPrimeNumber() {
    var r = this.isPrimeNumber(this.answer);
    this.history.push({
        q: "素数ですか",
        a: r
    });
    var _this = this;
    this.nlist = this.nlist.filter(function(n){
      if (r) {
        return _this.isPrimeNumber(n);
      } else {
        return !_this.isPrimeNumber(n);
      }
    });
    return r;
  }

  // Xの文字が含まれる
  questionContainsChara(x) {
    var r = this.isContainsChara(x, this.answer);
    this.history.push({
        q: x +"の文字は含まれますか",
        a: r
    });
    var _this = this;
    this.nlist = this.nlist.filter(function(n){
      if (r) {
        return _this.isContainsChara(x, n);
      } else {
        return !_this.isContainsChara(x, n);
      }
    });
    return r;
  }

  // 桁数
  questionNumberOfDigits(x) {
    var r = this.isNumberOfDigits(x, this.answer);
    this.history.push({
        q: x +"桁ですか",
        a: r
    });
    var _this = this;
    this.nlist = this.nlist.filter(function(n){
      if (r) {
        return _this.isNumberOfDigits(x, n);
      } else {
        return !_this.isNumberOfDigits(x, n);
      }
    });
    return r;
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
