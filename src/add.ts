/**
 * 
 */

import processMoreDigit from './utils/processMoreDigit';

export default function add(num1: Array<number>, num2: Array<number>) {
  let result = '';
  let Stepping = 0;
  let temp: number;
  let index: number;

  for (let i = num1.length - 1, j = num2.length - 1; j > -1; j--, i--) {
    temp = num1[i] + num2[j] + Stepping;
    Stepping = 0; // 阅后即焚
    if (temp > 9) {
      let carry = processMoreDigit(temp);
      Stepping = carry.Stepping;
      temp = carry.temp;
    }
    result = temp.toString() + result;
  }
  // 位数不相等，相同的位置已经加完了，现在处理多余的位置
  if (num1.length > num2.length) {
    for (let i = num1.length - num2.length - 1; i > -1; i--) {
      temp = num1[i] + Stepping;
      Stepping = 0;
      if (temp > 9) {
        let carry = processMoreDigit(temp);
        Stepping = carry.Stepping;
        temp = carry.temp;
      }else {
        index = i - 1;
      }
      result = temp.toString() + result;
      if (index !== undefined) {
        break;
      }
    }
  }
  if (Stepping !== 0) {
    result = Stepping.toString() + result;
  }
  if (index !== undefined) {
    result = num1.splice(0, index + 1).join('') + result;
  }


  return result;
}
