// const reversedNum = num => parseFloat(num.toString().split('').reverse().join(''))

// function checkPallendrom(number){
//     return (number === )? 'Is pallendrom' : 'Not pallendrom';

// }

const inputNum = 123;
function reversedNum(num) {
    return (
      parseFloat(
        num
          .toString()
          .split('')
          .reverse()
          .join('')
      ) * Math.sign(num)                
  }

console.log (checkPallendrom(123));