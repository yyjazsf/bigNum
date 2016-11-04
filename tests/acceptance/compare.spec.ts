/**
 * 比较2个数字
 */

import * as assert from 'assert';
import compare from '../../src/utils/compare';

describe('compare', function () {

  describe('#位数相等', function () {
    it('num1>num2', function () {
      assert.equal(1, compare([1, 1, 2], [1, 1, 1]));
    });
    it('相等', function () {
      assert.equal(0, compare([1, 0, 1], [1, 0, 1]));
    });
    it('小于', function () {
      assert.equal(-1, compare([1, 1, 1], [1, 8, 9]));
    });
  });

  describe('#位数不相等', function () {
    it('大于', function () {
      assert.equal(1, compare([1, 1, 2], [9, 1]));
    });
    it('小于', function () {
      assert.equal(-1, compare([9, 9], [1, 0, 0]));
    });
  });

});
