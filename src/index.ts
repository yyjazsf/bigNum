/**
 * 大数操作
 */

import add from './add';
import subtract from './subtract';
import multiply from './multiply';
import divide from './divide';
import remainder from './remainder';

// js 可安全操作的最大整数 Math.pow(2, 53) - 1
// 如果 for 循环条件为 <= Math.pow(2, 53)  就会死循环
// const maxNum = Number.MAX_SAFE_INTEGER;
// const minNum = Number.MIN_SAFE_INTEGER;

// 大数操作
class BigNum {

  // save arguments 
  // important arg1.length >= arg2.length
  private arg1: Array<number>;
  private arg2: Array<number>;

  public result: string;

  constructor(num?: string) {
    if (num !== undefined) {
      this.arg1 = num.split('').map((item) => {
        return parseInt(item, 10);
      });
    }
    // 可以初始化，todo 方法做链式处理
    this.result = '';
  };

  // process arguments to array<Number>,and set this.arg1  this.arg2
  private processArgs(num1: String, num2?: String) {
    let arr1: Array<string> = num1.split('');
    let arr2: Array<string> = num2.split(''); // todo num2为空的情况

    if (arr2.length > arr1.length) {
      let temp = arr1;
      arr1 = arr2;
      arr2 = temp;
    }

    this.arg1 = arr1.map(function (item) {
      return parseInt(item, 10);
    });
    this.arg2 = arr2.map(function (item) {
      return parseInt(item, 10);
    });
  }

  // add
  add(num1: String, num2?: String) {
    this.result = '';
    this.processArgs(num1, num2);
    this.result = add(this.arg1, this.arg2);
    console.log(this.result);

    return this;
  }

  // subtract
  subtract(num1: String, num2?: String) {
    this.result = '';
    this.processArgs(num1, num2);
    this.result = subtract(this.arg1, this.arg2);
    return this;
  }

  // multiply
  multiply(num1: String, num2?: String) {
    this.result = '';
    this.processArgs(num1, num2);
    this.result = multiply(this.arg1, this.arg2);
    return this;
  }

  // divide 怎么缩写
  divide(num1: String, num2?: String) {
    this.result = '';
    this.processArgs(num1, num2);
    this.result = divide(this.arg1, this.arg2);
    return this;
  }

  // Returns a BigInteger whose value is (this % val).
  remainder(num1: String, num2?: String) {
    this.result = '';
    this.processArgs(num1, num2);
    this.result = remainder(this.arg1, this.arg2);
    return this;
  }

}


let yyj = new BigNum();
let zry = yyj.add('111', '1');

console.log(zry.valueOf());
