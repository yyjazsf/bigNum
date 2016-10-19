/**
 * 大数操作
 */

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
    let Stepping: number = 0;
    this.processArgs(num1, num2);
    let temp: number;
    let index: number;
    //
    for (let i = this.arg2.length - 1; i > -1; i--) {
      temp = this.arg2[i] + this.arg1[i] + Stepping;
      Stepping = 0;//阅后即焚
      if (temp > 9) {
        let carry = this.processMoreDigit(temp);
        Stepping = carry.Stepping;
        temp = carry.temp;
      }
      this.result = temp.toString() + this.result;
    }
    // 位数不相等，相同的位置已经加完了，现在处理多余的位置
    if (this.arg1.length > this.arg2.length) {
      for (let i = this.arg1.length - this.arg2.length - 1; i > -1; i--) {
        temp = this.arg1[i] + Stepping;
        Stepping = 0;
        if (temp > 9) {
          let carry = this.processMoreDigit(temp);
          Stepping = carry.Stepping;
          temp = carry.temp;
        }
        else {
          index = i - 1;
        }
        this.result = temp.toString() + this.result;
        if (index !== undefined) {
          break;
        }
      }
    }
    else if(Stepping !== 0) {
      this.result = Stepping.toString() + this.result;
    }
    if (index !== undefined) {
      this.result = this.arg1.splice(0, index).join('') + this.result;
    }

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