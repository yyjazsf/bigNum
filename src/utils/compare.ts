/**
 * @description 比较2个数字
 * @param  {Array<number>} num1 number数组的大数一
 * @param  {Array<number>} num2 number数组的大数二
 * @returns numbe  1:num1>num2  0:相等 -1:num1<num2
 */
export default function (num1: Array<number>, num2: Array<number>): number {

  if (num1.length > num2.length) {
    return 1;
  }
  if (num1.length < num2.length) {
    return -1;
  }
  // 2个数字长度相等
  for (let i = 0, len = num1.length; i < len; i++) {
    if (num1[i] !== num2[i]) {
      if (num1[i] > num2[i]) {
        return 1;
      }else {
        return -1;
      }
    }
  }
  
  return 0;
}
