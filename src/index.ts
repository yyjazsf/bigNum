/**
 * 大数操作
 * http://www.tyut.edu.cn/kecheng1/2008/site04/courseware/chapter1/1.2.htm  二进制计算
 */

import processArgs from './utils/processArgs';

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
  private args: Array<Array<number>>;

  public result: string;

  constructor(num?: string) {
    if (num !== undefined) {
      this.args[0] = num.split('').map((item) => {
        return parseInt(item, 10);
      });
    }
    // 可以初始化，todo 方法做链式处理
    this.result = '';
  };

  // add
  add(num1: string, num2?: string) {
    this.result = '';
    this.args = processArgs(num1, num2);
    this.result = add(this.args[0], this.args[1]);
    return this;
  }

  // subtract
  subtract(num1: string, num2?: string) {
    this.result = '';
    this.args = processArgs(num1, num2, false);
    this.result = subtract(this.args[0], this.args[1]);
    return this;
  }

  // multiply
  multiply(num1: string, num2?: string) {
    this.result = '';
    this.args = processArgs(num1, num2);
    this.result = multiply(this.args[0], this.args[1]);
    return this;
  }

  /**
   * @description 除法
   * @param  {string} num1
   * @param  {string} num2
   * @param  {number} decimal=0
   * @return {BigNum} 当前BigNum对象
   */
  divide(num1: string, num2: string, decimal = 0) {
    this.result = '';
    this.args = processArgs(num1, num2, false);
    this.result = divide(this.args[0], this.args[1], decimal);
    return this;
  }

  // Returns a BigInteger whose value is (this % val).
  remainder(num1: string, num2?: string) {
    this.result = '';
    this.args = processArgs(num1, num2);
    this.result = remainder(this.args[0], this.args[1]);
    return this;
  }

}

let yyj = new BigNum();
let zry = yyj.divide('10', '11', 2);

console.log(zry.result);
