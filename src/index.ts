/**
 * 大数操作
 */

import add from './add'


// js 可安全操作的最大整数 Math.pow(2, 53) - 1
// 如果 for 循环条件为 <= Math.pow(2, 53)  就会死循环
const maxNum = Number.MAX_SAFE_INTEGER;
const minNum = Number.MIN_SAFE_INTEGER;

// 大数操作
class bigNum {

  // save arguments 
  // important arg1.length >= arg2.length
  private arg1: Array<number>;
  private arg2: Array<number>;

  public result: string;

  constructor() {
    this.result = '';
  };

  // process arguments to array<Number>,and set this.arg1  this.arg2
  private processArgs(num1: String, num2: String) {
    let arr1: Array<string> = num1.split('');
    let arr2: Array<string> = num2.split('');

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

  // 处理多位数  用于步进
  private processMoreDigit(num: number) {
    return {
      Stepping: Math.floor(num / 10),
      temp: num %= 10
    };
  }

  // add
  add(num1: String, num2: String) {
    this.result = '';
    this.processArgs(num1, num2);
   
    this.result = add(this.arg1,this.arg2);
    console.log(this.result);

    return this;
  }
  
  // Subtraction
  sub(num1: String, num2: String): String {
    this.processArgs(num1, num2);
    return '';
  }
  // multiplication
  mul(num1: String, num2: String): String {
    this.processArgs(num1, num2);
    return '';
  }

}


let yyj = new bigNum();
let zry = yyj.add('9', '9');

console.log(zry.result);