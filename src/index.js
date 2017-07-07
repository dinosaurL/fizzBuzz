const fizzBuzzIndex = {3: 'Fizz', 5: 'Buzz'};
const fizzBuzzKeys = Object.keys(fizzBuzzIndex);

const fizzBuzz = (val) => {

  if (val <= 0 || isNaN(val)) return '';
  return Array.from({length: val}, (v, i) => replaceFizzBuzz(i+1)).join(',');

};

const replaceFizzBuzz = (val) => { 
    
    if (val <= 0 || isNaN(val)) return '';
    let fizzBuzzMap = fizzBuzzKeys.map((v) => {
        return val % v ? '' : fizzBuzzIndex[v]                                              
    }).join(' ').trim();   
    return fizzBuzzMap.length ? fizzBuzzMap : val;

};

console.log(fizzBuzz(process.argv[2]));

module.exports = {replaceFizzBuzz, fizzBuzz};