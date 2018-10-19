var expect = require('chai').expect;
var isValidUser = require('../loginController').isValidUser;
var isValidUserAsync = require('../loginController').isValidUserAsync;
var isValidUserAsyncPromise = require('../loginController').isValidUserAsyncPromise;


describe('isValidUser()', function () {

    it('should return true if user exists', function () {
        expect(isValidUser(['abc', 'xyz'], 'abc')).to.be.equal(true);
    });

    it('should return false if user doesnt exist', function () {
        expect(isValidUser(['abc', 'xyz'], 'pqr')).to.be.equal(false);
    });

});

describe('isValidUserAsync()', function () {
    it('should return true if user exists', function (done) {
        this.timeout(15000);
        isValidUserAsync(['abc', 'xyz'], 'abc', function (result) {
            expect(result).to.be.equal(true);
            done();
        });
    });

    it('should return false if user exists', function (done) {
        this.timeout(15000);
        isValidUserAsync(['abc', 'xyz'], 'pqr', function (result) {
            expect(result).to.be.equal(false);
            done();
        });
    });
});

describe('isValidUserAsyncPromise()', function () {
    it('should return true if user exists', function (done) {
        this.timeout(15000);
        isValidUserAsyncPromise(['abc', 'xyz'], 'abc')
            .then(function (result) {
                expect(result).to.be.equals(true);
                done();
            });
    });

    it('should return false if user doesnt exist', function (done) {
        this.timeout(15000);
        isValidUserAsyncPromise(['abc', 'xyz'], 'pqr')
            .then(function (result) {
                expect(result).to.be.equals(false);
                done();
            });
    });
});
