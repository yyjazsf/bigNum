/**
 * 第一次写 :)
 */
const assert = require('assert');

import add from '../../src/add';

// add 方法 第一个参数的位数 >= 第二个参数的位数
describe('add', function () {

  describe('#多位并且位数相等', function () {
    it('不进位情况', function () {
      assert.equal('222', add([1, 1, 1], [1, 1, 1]));
    });
    it('只有最后一位进位', function () {
      assert.equal('210', add([1, 0, 1], [1, 0, 9]));
    });
    it('除了第一位，其他位都进位', function () {
      assert.equal('300', add([1, 1, 1], [1, 8, 9]));
    });
    it('全部进位', function () {
      assert.equal('1998', add([9, 9, 9], [9, 9, 9]));
    });
  });

  describe('#多位数 但是 位数不相等', function () {
    it('不进位情况', function () {
      assert.equal('122', add([1, 1, 1], [1, 1]));
    });
    it('只有最后一位进位', function () {
      assert.equal('1110', add([1, 0, 0, 9], [1, 0, 1]));
    });
    it('除了第一位，其他位都进位', function () {
      assert.equal('1300', add([1, 1, 1, 1], [1, 8, 9]));
    });
    it('全部进位', function () {
      assert.equal('10998', add([9, 9, 9, 9], [9, 9, 9]));
    });
  });

  describe('#多位数 和 单个数', function () {
    it('不进位情况', function () {
      assert.equal((111 + 1).toString(), add([1, 1, 1], [1]));
    });
    it('只有最后一位进位', function () {
      assert.equal((1009 + 1).toString(), add([1, 0, 0, 9], [1]));
    });
    it('除了第一位，其他位都进位', function () {
      assert.equal((1991 + 9).toString(), add([1, 9, 9, 1], [9]));
    });
    it('全部进位', function () {
      assert.equal((9995 + 5).toString(), add([9, 9, 9, 5], [5]));
    });
  });

});



