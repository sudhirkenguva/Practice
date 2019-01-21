var expect = require('chai').expect;
var add2Nos = require('../add2nos');

describe('add2Nos()',function(){
    it('should add 2 numbers',function(){
        //1.Arrange [inputs and outputs] 
        var x = 5;
        var y = 7;
        var sum = x + y;

        // 2. act (on the function that we need to test)
        var sum2 = add2Nos(x,y);

        // 3. assert
        expect(sum2).to.be.equal(sum);
    });
});