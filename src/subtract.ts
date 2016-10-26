/**
 * todo 和加法合并
 */
import { divideAndRemainder } from './utils';

/**
 * @param {Array<number>} num1 被减数
 * @param {Array<number>} num2 减数
 * @return {string} 结果
 */
export default function subtract(num1: Array<number>, num2: Array<number>) {
  let result = '';
  let stepping = 0;
  let flag = false;
  let temp: number;
  let index: number;

  if (num1.length < num2.length) {
    flag = true;
    for (let i = num2.length - num1.length; i > 0; i--) {
      num1.push(0);
    }
  }

  for (let i = num1.length - 1; i > -1; i--) {
    temp = num1[i] - num2[i] - stepping;
    stepping = 0;
    if (temp < 0) {
      let carry = divideAndRemainder(Math.abs(temp));
      stepping = carry.stepping;
      temp = carry.temp;
    }
    result = temp.toString() + result;
  }
  // // 位数不相等，相同的位置已经加完了，现在处理多余的位置
  // if (num1.length > num2.length) {
  //   for (let i = num1.length - num2.length - 1; i > -1; i--) {
  //     temp = num1[i] + stepping;
  //     stepping = 0;
  //     if (temp > 9) {
  //       let carry = divideAndRemainder(temp);
  //       stepping = carry.stepping;
  //       temp = carry.temp;
  //     } else {
  //       index = i - 1;
  //     }
  //     result = temp.toString() + result;
  //     if (index !== undefined) {
  //       break;
  //     }
  //   }
  // }
  // if (stepping !== 0) {
  //   result = stepping.toString() + result;
  // }
  // if (index !== undefined) {
  //   result = num1.splice(0, index + 1).join('') + result;
  // }


  return result;
};
