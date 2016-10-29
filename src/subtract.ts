/**
 * https://en.wikipedia.org/wiki/Subtraction
 */
/**
 * @param {Array<number>} num1 被减数
 * @param {Array<number>} num2 减数
 * @return {string} 结果
 */
export default function subtract(num1: Array<number>, num2: Array<number>) {
  let result = '';
  let stepping = 0; // 步进？忘了叫啥了
  let flag = false; // 结果是否为负数
  let temp;

  // 重要步骤，极大的简化计算步骤
  if (num1.length < num2.length) {
    flag = true;
    temp = num1;
    num1 = num2;
    num2 = temp;
  }

  // 将2个数位数补全，空余的用0填充
  for (let i = num1.length - num2.length; i > 0; i--) {
    num2.unshift(0);
  }

  for (let i = num1.length - 1; i > -1; i--) {
    temp = num1[i] - num2[i] - stepping;
    stepping = 0;
    if (temp < 0) {
      if (i !== 0) {
        stepping = 1;
        temp = temp + 10;
      }
      else {
        /**
         * result < 0
         * 只有位数相同的情况才会出现这种情况
         */
        result = (-temp).toString() + result;
        let tempResult = result.split('').reverse().map((item) => {
          return parseInt(item, 10);
        });
        temp = 0;
        for (let i = 0, len = tempResult.length - 1; i < len; i++) {
          temp += (tempResult[i] * Math.pow(10, i));
        }
        temp -= tempResult[tempResult.length - 1] * Math.pow(10, tempResult.length - 1);
        result = '';
        // flag = true;
      }
    }
    result = temp.toString() + result;
  }
  while (result[0] === '0') {// 好像前面只会出现一次0？
    result = result.substr(1, result.length);
  }
  if (flag) {
    result = '-' + result;
  }
  return result;
};
