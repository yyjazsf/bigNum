/**
 * 乘法
 * 模拟手工计算的普通大数乘法[采用]，分治算法和FFT算法
 */

import divideAndRemainder from './utils/divideAndRemainder';
import processArgs from './utils/processArgs';
import add from './add';
/**
 * @param {num1} name 位数长的数字数组
 * @param {num2} name 位数短的数字数组
 */
export default function multiply(num1: Array<number>, num2: Array<number>) {

  let result = undefined;
  let tempArr = []; // 记录乘的过程中[被乘数]第N位数乘以[乘数]的积
  let stepping = 0; // 进位

  // 用位数短的数乘以 位数长的 数
  for (let i = num2.length - 1, position = 0; i > -1; i-- , position++) {
    let temp;
    tempArr[i] = [];
    // 末尾补0
    for (let j = position - 1; j > -1; j--) {
      tempArr[i][j] = 0;
    }

    // 前面补0了，index记录开始放的位置
    for (let j = num1.length - 1, index = position; j > -1; j-- , index++) {
      temp = num2[i] * num1[j] + stepping;
      if (temp > 9) {
        let carry = divideAndRemainder(temp);
        stepping = carry.stepping;
        temp = carry.temp;
      }
      tempArr[i][index] = temp;
    }
    if (stepping !== 0) {
      tempArr[i].push(stepping);
      stepping = 0;
    }
  }

  result = tempArr[tempArr.length - 1].reverse().join('');
  // 开始累加[被乘数各位数]乘以乘数的积。这时候应该调用内部的add方法，但是参数不行，改！
  for (let i = tempArr.length - 2; i > -1; i--) {
    tempArr[i] = tempArr[i].reverse();
    let args = processArgs(result, tempArr[i].join(''));
    result = add(args[0], args[1]);
  }
  return result;
};
