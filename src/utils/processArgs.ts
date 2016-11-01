/**
 * @description process arguments to array<Number>,and set this.arg1  this.arg2
 * @param {string} num1 字符串类型数字
 * @param {string} [num2] 字符串类型数字
 * @param {boolean} [exchange] 是否把长的数放前面
 * @description 将传入的字符串变成 Array<number>,并赋值给内部变量 this.arg1,this.arg2
 */
export default function (num1: string, num2?: string, exchange?: boolean) {
  let arg1: Array<number>, arg2: Array<number>;
  let arr1: Array<string> = num1.split('');
  // todo num2为空的情况
  let arr2: Array<string> = num2.split('');

  if (exchange !== false && arr2.length > arr1.length) {
    let temp = arr1;
    arr1 = arr2;
    arr2 = temp;
  }

  arg1 = arr1.map(function (item) {
    return parseInt(item, 10);
  });
  arg2 = arr2.map(function (item) {
    return parseInt(item, 10);
  });

  return [arg1, arg2];
};
