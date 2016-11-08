/**
 * 
 */
import * as assert from 'assert';
import divide from '../../src/divide';

describe('divide', function () {
  describe('#没有小数', function () {
    it('商为正整数', function () {
      assert.equal('1', divide([1, 1, 1], [1, 1, 1]));
    });
    it('商为正整数', function () {
      assert.equal('4', divide([1, 2], [3]));
    });
    it('商为0,被除数长度短', function () {
      assert.equal('0', divide([3], [1, 2]));
    });
    it('商为0，被除数长度相等', function () {
      assert.equal('0', divide([1, 2], [1, 3]));
    });
  });

  describe('#有小数', function () {
    it('第一个能整除', function () {
      assert.equal('1.09', divide([1, 1, 1], [1, 1]));
    });
    it('第一个不能整除', function () {
      assert.equal('9.25', divide([1, 1, 1], [1, 2]));
    });
    it('第一个不能整除', function () {
      assert.equal('9.25', divide([1, 0], [1, 1]));
    });
  });

});
