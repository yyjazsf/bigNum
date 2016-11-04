/**
 * 
 */

import divideAndRemainder from './utils/divideAndRemainder';
/**
 * @description 加法
 * @param  {Array<number>} num1
 * @param  {Array<number>} num2
 * @returns string 字符串表示的和
 */
export default function add(num1: Array<number>, num2: Array<number>): string {
  // deep copy
  num1 = num1.slice(0);
  num2 = num2.slice(0);
  let result = '';
  let stepping = 0;
  let temp: number;
  let index: number;

  for (let i = num1.length - 1, j = num2.length - 1; j > -1; j--, i--) {
    temp = num1[i] + num2[j] + stepping;
    stepping = 0; // 阅后即焚
    if (temp > 9) {
      let carry = divideAndRemainder(temp);
      stepping = carry.stepping;
      temp = carry.temp;
    }
    result = temp.toString() + result;
  }
  // 位数不相等，相同的位置已经加完了，现在处理多余的位置
  if (num1.length > num2.length) {
    for (let i = num1.length - num2.length - 1; i > -1; i--) {
      temp = num1[i] + stepping;
      stepping = 0;
      if (temp > 9) {
        let carry = divideAndRemainder(temp);
        stepping = carry.stepping;
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
  if (stepping !== 0) {
    result = stepping.toString() + result;
  }
  if (index !== undefined) {
    result = num1.splice(0, index + 1).join('') + result;
  }


  return result;
}
