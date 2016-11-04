/**
 * 减法
 */
import * as assert from 'assert';
import subtract from '../../src/subtract';

describe('subtract', function () {

  describe('#多位并且位数相等', function () {
    it('不退位情况', function () {
      assert.equal((211-100).toString(), subtract([2, 1, 1], [1, 0, 0]));
    });
    it('只剩下一位', function () {
      assert.equal((109-108).toString(), subtract([1, 0, 9], [1, 0, 8]));
    });
    it('只退第一位', function () {
      assert.equal((111-100).toString(), subtract([1, 1, 1], [1,0,0]));
    });
    it('负数', function () {
      assert.equal((111-112).toString(), subtract([1, 1, 1], [1,1,2]));
    });
  });


  describe('#多位数 但是 位数不相等', function () {
    it('不退位情况', function () {
      assert.equal((111-11).toString(), subtract([1, 1, 1], [1, 1]));
    });
    it('只有第一位退位', function () {
      assert.equal((1109-209).toString(), subtract([1, 1, 0, 9], [2,0,9]));
    });
     it('中间退位', function () {
      assert.equal((1111-1021).toString(), subtract([1, 1, 1,1], [1,0,2,1]));
    });
    it('全部退位', function () {
      assert.equal((9888-999).toString(), subtract([9, 8, 8, 8], [9, 9, 9]));
    });
    it('负数', function () {
      assert.equal((19-100).toString(), subtract([1,9], [1,0,0]));
    });
  });

  describe('#多位数 和 单个数', function () {
    it('不退位情况', function () {
      assert.equal((111 - 1).toString(), subtract([1, 1, 1], [1]));
    });
    it('全部退位', function () {
      assert.equal((91 - 5).toString(), subtract([9,1], [5]));
    });
    it('负数', function () {
      assert.equal((1-999).toString(), subtract([1], [9,9,9]));
    });
  });

});