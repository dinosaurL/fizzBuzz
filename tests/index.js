const assert = require('chai').assert;
const fizzBuzz= require('../src/index').fizzBuzz;
const replaceFizzBuzz= require('../src/index').replaceFizzBuzz;

describe('The replacefizzBuzz function', function () {
  it('returns EMPTY string if no arguments', function () {
    assert.isEmpty(replaceFizzBuzz());
  })
  it('returns EMPTY string if passed in 0 or negative number, or non number', function () {
    assert.isEmpty(replaceFizzBuzz(0));
    assert.isEmpty(replaceFizzBuzz(-1));
    assert.isEmpty(replaceFizzBuzz([]));    
    assert.isEmpty(replaceFizzBuzz({}));    
    assert.isEmpty(replaceFizzBuzz('A string'));   
 })

  it('returns correct values', function () {     
    assert.equal(replaceFizzBuzz(1), '1');   
    assert.equal(replaceFizzBuzz(2), '2');
    assert.equal(replaceFizzBuzz(3), 'Fizz');   
    assert.equal(replaceFizzBuzz(5), 'Buzz');
    assert.equal(replaceFizzBuzz(15), 'Fizz Buzz');
  })  
})

describe('The fizzbuzz function', function () {
  it('returns EMPTY string if no arguments', function () {
    assert.isEmpty(fizzBuzz());
  })
  it('returns EMPTY string if passed in 0 or negative number, or non number', function () {
    assert.isEmpty(fizzBuzz(0));
    assert.isEmpty(fizzBuzz(-1));
    assert.isEmpty(fizzBuzz([]));    
    assert.isEmpty(fizzBuzz({}));    
    assert.isEmpty(fizzBuzz(''));  
    assert.isEmpty(fizzBuzz('A string'));   
 })

  it('returns correct values', function () {     
    assert.equal(fizzBuzz(1), '1');   
    assert.equal(fizzBuzz(2), '1,2');
    assert.equal(fizzBuzz(3), '1,2,Fizz');   
    assert.equal(fizzBuzz(5), '1,2,Fizz,4,Buzz');
    assert.equal(fizzBuzz(15), '1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,Fizz Buzz');
  })  
})

