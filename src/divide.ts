/**
 * 抄袭别人的。。。思路
假设a={2 4 2 3 1}，b={2 3}，结果result={0 0 0 0 0}：
先取a[0]a[1]即24，减去b一次，得a={0 1 2 3 1}，result={0 1 0 0 0}；
再取a[1]a[2]即12，发现它小于b，则多取一位，取a[1]a[2]a[3]即123，减b五次，得a={0 0 0 8 1}，result={0 1 0 5 0}；
再取a[3]a[4]即81，减b三次，得a={0 0 0 1 2}，result={0 1 0 5 3}。
 */

import compare from './utils/compare';
import subtract from './subtract';

/**
 * @description 大数相除
 * @param  {Array<number>} num1
 * @param  {Array<number>} num2
 * @returns string
 */
export default function divide(num1: Array<number>, num2: Array<number>): string {
  // deep copy
  num1 = num1.slice(0);
  num2 = num2.slice(0);
  let result = '';
  // 
  let isBig = compare(num1, num2);

  // num1 <= num2?
  if (isBig !== 1) {
    // todo 实现指定精确度 0.xxx
    return isBig === -1 ? '0' : '1';
  }

  // 减去被除数的当前值
  let currVal: any = [];
  let quot = 0;

  // todo 实现指定精确度 0.xxx   len = num1.length; i < len
  for (let i = num2.length - 1, len = num1.length; i < len; i++ , quot = 0) {
    currVal = currVal.concat(num1.splice(0, 1));

    isBig = compare(currVal, num2);
    if (isBig === -1) {
      continue;
    }
    while (compare(currVal, num2) !== -1) {
      currVal = subtract(currVal, num2).split('');
      //for(let )
      currVal = currVal.map((item) => {
        return parseInt(item, 10);
      });
      quot++;
    }

    result += quot.toString();

  }


  return result;
};
