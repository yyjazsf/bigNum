/**
 * 处理多位整数，分离进位
 */
export default function (num: number) {
  return {
    stepping: Math.floor(num / 10),
    temp: num % 10
  };
}
