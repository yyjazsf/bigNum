/**
 * 抄袭别人的。。。思路
 * 假设a={2 4 2 3 1}，b={2 3}，结果result={0 0 0 0 0}：
 * 先取a[0]a[1]即24，减去b一次，得a={0 1 2 3 1}，result={0 1 0 0 0}；
 * 再取a[1]a[2]即12，发现它小于b，则多取一位，取a[1]a[2]a[3]即123，减b五次，得a={0 0 0 8 1}，result={0 1 0 5 0}；
 * 再取a[3]a[4]即81，减b三次，得a={0 0 0 1 2}，result={0 1 0 5 3}。
 */

import compare from './utils/compare';
import subtract from './subtract';
// import add from './add';
/**
 * @description 大数相除
 * @param  {Array<number>} num1
 * @param  {Array<number>} num2
 * @param  {number} decimal? 结果是否小数
 * @returns string
 */
export default function divide(num1: Array<number>, num2: Array<number>, decimal = 0): string {
  // deep copy
  num1 = num1.slice(0);
  num2 = num2.slice(0);
  let result = '';
  // 
  let isBig = compare(num1, num2);
  // num1 <= num2?
  if (isBig !== 1) {
    // todo 实现指定精确度 0.xxx
    if (isBig === -1 && decimal == 0) {
      return '0';
    }
    if (isBig === 0) {
      return '1';
    }
  }
  decimal += 1; // 小数点和多出来的一位
  let currVal: any = []; // 减去被除数的当前值
  let quot = 0; // 当前位的商值
  let hasDot = false; // 是否加了小数点
  let first = 1; // 记录第一次进入循环，跳过num2.length-1 的位置

  // todo 实现指定精确度 0.xxx   len = num1.length; i < len
  for (let i = num2.length - 1, len = num1.length + decimal; i < len; i++ , quot = 0) {
    if (num1.length === 0 && currVal.length !== 0) {
      if (!hasDot) {
        hasDot = true;
        result += result.length === 0 ? '0.' : '.';
      }
      currVal.push(0);
    } else if (num1.length === 0 && currVal.length === 0) {
      break;
    } else {
      if (first === 1) {
        first = 0;
        currVal = currVal.concat(num1.splice(0, i + 1));
      } else {
        currVal = currVal.concat(num1.splice(0, 1));
      }
    }

    isBig = compare(currVal, num2);
    if (isBig === -1) { // 去除第一次判断的0
      if (first !== 0) {
        result += '0';
      } else {
        first = -1;
      }
      continue;
    }
    while (compare(currVal, num2) !== -1) {
      currVal = subtract(currVal, num2).split('');
      currVal = currVal.map((item) => {
        return parseInt(item, 10);
      });
      quot++;
    }

    result += quot.toString();

  }

  let dotIndex = result.indexOf('.');
  if (dotIndex !== -1) {
    let dotAfter = result.substr(dotIndex + 1, result.length); // 小数点后面数字
    if (dotAfter.length > decimal - 1 ) {
      // todo 处理小数点的四舍五入 add(,0.01)
      // && parseInt(dotAfter[dotAfter.length - 1], 10) > 4
      dotAfter = dotAfter.substr(0, dotAfter.length - 1);
    }
  }
  return result;
};
