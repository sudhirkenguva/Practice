var chai = require('chai');
var expect = chai.expect;
// var should = require('chai').should();
chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var promisifiedVarSum = require('../promisifiedVarSum');

describe('prmoisifiedVarSum()',function(){
 it('should return the input number when single no is passed',function(done){
    promisifiedVarSum(5).then(function(result){
        expect(result).to.be.equals(5);
        done();
    })
 }); 
 it('should return the sum of 2 input numbers',function(done){
    promisifiedVarSum(5,6).then(function(result){
        expect(result).to.be.equals(11);
        done();
    })
 }); 

 
//  it('should return the sum of 3 input numbers',function(done){
//      promisifiedVarSum(5,6,7).then(function(result){
//          expect(result).to.be.equals(20);
//          done();
//         });
//     });


    it('should return the sum of 4 numbers -- "eventually (from chai as promised" keyword is used',function(){
       return expect(promisifiedVarSum(5,6,7,8)).to.be.eventually.equal(26);
    });
});
